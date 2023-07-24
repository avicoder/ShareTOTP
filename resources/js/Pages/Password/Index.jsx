import Card from '@/Components/Card';
import DefaultButton from '@/Components/LinkButton';
import { Cell, HeadCell, Row, Table } from '@/Components/Table';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Users({ auth, passwords }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={(
                <div className="flex justify-between">
                    <Heading>OTPs</Heading>
                    <DefaultButton href={route('passwords.create')}>Create</DefaultButton>
                </div>
            )}
        >
            <Head title="OTPs" />

            <Card>
                <Table head={(
                    <Row>
                        <HeadCell className="w-12">&nbsp;</HeadCell>
                        <HeadCell>Name</HeadCell>
                        <HeadCell>Algorithm</HeadCell>
                        <HeadCell>Period</HeadCell>
                        <HeadCell compact>&nbsp;</HeadCell>
                    </Row>
                )}>
                {passwords.map((user) => (
                    <Row key={user.id}>
                        <Cell>
                            <img src={user.icon} />
                        </Cell>
                        <Cell>{user.name}</Cell>
                        <Cell>{user.algorithm}</Cell>
                        <Cell>{user.period} Secs</Cell>
                        <Cell>
                            <Link href={route('passwords.edit', [user.id])}>Edit</Link>
                        </Cell>
                    </Row>
                ))}
                </Table>
            </Card>
        </AuthenticatedLayout>
    );
}
