import Card from '@/Components/Card';
import DefaultButton from '@/Components/LinkButton';
import { Cell, HeadCell, Row, Table } from '@/Components/Table';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Users({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={(
                <div className="flex justify-between">
                    <Heading>Users</Heading>
                    <DefaultButton href={route('users.create')}>Create</DefaultButton>
                </div>
            )}
        >
            <Head title="Admin Users" />

            <Card>
                <Table head={(
                    <Row>
                        <HeadCell compact>#</HeadCell>
                        <HeadCell>Name</HeadCell>
                        <HeadCell>Email</HeadCell>
                        <HeadCell compact>&nbsp;</HeadCell>
                    </Row>
                )}>
                {users.map((user) => (
                    <Row key={user.id}>
                        <Cell>{user.id}</Cell>
                        <Cell>{user.name}</Cell>
                        <Cell>{user.email}</Cell>
                        <Cell>
                            <Link href={route('users.edit', [user.id])}>Edit</Link>
                        </Cell>
                    </Row>
                ))}
                </Table>
            </Card>
        </AuthenticatedLayout>
    );
}
