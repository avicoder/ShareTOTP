import Card from '@/Components/Card';
import OptionsInput from '@/Components/OptionsInput';
import SelectInput from '@/Components/SelectInput';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function TestPage({ auth, settings }) {
    const [plan, setPlan] = useState({
        id: 1,
        name: 'Wade Cooper',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    })

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<Heading>Testing Page</Heading>}
        >
            <Head title="Dashboard" />
            <Card>
                <div className="text-gray-900">You're logged in!</div>
                <div>
                    <SelectInput
                        label="Pick a Plan"
                        value={plan}
                        onChange={(v) => setPlan(v)}
                        options={[
                            {
                                id: 'Startup',
                                value: 'startup',
                            },
                            {
                                id: 'Enterprise',
                                value: 'enterprise',
                            },
                        ]}
                    />
                </div>
            </Card>
        </AuthenticatedLayout>
    );
}
