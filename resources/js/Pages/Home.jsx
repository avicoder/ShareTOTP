import ApplicationLogo from '@/Components/ApplicationLogo';
import Card from '@/Components/Card';
import PasswordCard from '@/Components/PasswordCard';
import Guest from '@/Layouts/GuestLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Home({ passwords }) {
    const { settings } = usePage().props

    return (
        <Guest>
            <Head title="Home" />
            <div className="pt-6 absolute top-0 left-0 w-full flex justify-center">
                <div className="flex items-center">
                    <ApplicationLogo className="w-9 h-9 fill-current text-gray-500" />
                    <p className="ml-2 text-2xl font-bold text-gray-600">
                        {settings.app_name}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {passwords.map((password) => (
                    <PasswordCard key={password.id} password={password} />
                ))}
            </div>
        </Guest>
    );
}
