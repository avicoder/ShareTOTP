import Card from '@/Components/Card';
import DestroyButton from '@/Components/DestroyButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import DefaultButton from '@/Components/LinkButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ auth, user }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        new_password: '',
    })

    const submit = (e) => {
        e.preventDefault()
        patch(route('users.update', [user.id]), {
            preserveScroll: true,
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <Heading>Edit {user.name}</Heading>
                    <DefaultButton href={route('users.index')}>Back</DefaultButton>
                </div>
            }
        >
            <Head title={"Edit " + user.name} />

            <Card
                title="Update Details"
                description="Update user account's information."
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

            <Card
                title="Delete Record"
                description="Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
            >
                <section className="max-w-xl mt-6">
                    <DestroyButton href={route('users.destroy', [user.id])} />
                </section>
            </Card>

        </AuthenticatedLayout>
    );
}
