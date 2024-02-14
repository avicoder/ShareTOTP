import Card from '@/Components/Card';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import DefaultButton from '@/Components/LinkButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        new_password: '',
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('users.store'), {
            preserveScroll: true,
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <Heading>Create User</Heading>
                    <DefaultButton href={route('users.index')}>Back</DefaultButton>
                </div>
            }
        >
            <Head title="Create User" />

            <Card
                title="Create User"
                description="Create new admin user for the platform."
            >
                <section className="max-w-xl mt-6">
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel value="Name" />
                            <TextInput
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel value="Email" />
                            <TextInput
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel value="Password" />
                            <TextInput
                                type="password"
                                value={data.new_password}
                                onChange={(e) => setData('new_password', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.new_password} className="mt-2" />
                        </div>
                        <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    </form>
                </section>
            </Card>
        </AuthenticatedLayout>
    );
}
