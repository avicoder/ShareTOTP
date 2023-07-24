import Card from '@/Components/Card';
import PasswordCard from '@/Components/PasswordCard';
import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';
import totp from 'totp-generator';

export default function Home({ passwords }) {
    const token = totp("JBSWY3DPEHPK3PXP");

    return (
        <Guest>
            <Head title="Home" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {passwords.map((password) => (
                    <PasswordCard key={password.id} password={password} />
                ))}
            </div>
        </Guest>
    );
}
