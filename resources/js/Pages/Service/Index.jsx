import Card from '@/Components/Card';
import DefaultButton from '@/Components/LinkButton';
import { Cell, HeadCell, Row, Table } from '@/Components/Table';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Users({ auth, services }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={(
                <div className="flex justify-between">
                    <Heading>Services</Heading>
                    <DefaultButton href={route('services.create')}>Create</DefaultButton>
                </div>
            )}
        >
            <Head title="Platform Services" />

            <Card>
                <Table head={(
                    <Row>
                        <HeadCell className="w-12">&nbsp;</HeadCell>
                        <HeadCell>Name</HeadCell>
                        <HeadCell compact>&nbsp;</HeadCell>
                    </Row>
                )}>
                {services.map((user) => (
                    <Row key={user.id}>
                        <Cell>
                            <img src={user.icon} width="25" />
                        </Cell>
                        <Cell>{user.name}</Cell>
                        <Cell>
                            <Link href={route('services.edit', [user.id])}>Edit</Link>
                        </Cell>
                    </Row>
                ))}
                </Table>
            </Card>
        </AuthenticatedLayout>
    );
}
