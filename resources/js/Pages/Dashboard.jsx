import PasswordCard from '@/Components/PasswordCard';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, passwords }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<Heading>Dashboard</Heading>}
        >
            <Head title="Dashboard" />
            <div className="flex gap-4">
                {passwords.map((password) => (
                    <PasswordCard key={password.id} password={password} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
