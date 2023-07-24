import Card from '@/Components/Card';
import FileInput from '@/Components/FileInput';
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
        icon_file: null,
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('services.store'), {
            preserveScroll: true,
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <Heading>Create Service</Heading>
                    <DefaultButton href={route('services.index')}>Back</DefaultButton>
                </div>
            }
        >
            <Head title="Create Service" />

            <Card
                title="Create Service"
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
                            <InputLabel value="Icon" />
                            <FileInput
                                onChange={(e) => setData('icon_file', e.target.files[0])}
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.icon_file} className="mt-2" />
                        </div>
                        <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    </form>
                </section>
            </Card>
        </AuthenticatedLayout>
    );
}
