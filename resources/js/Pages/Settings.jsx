import Card from '@/Components/Card';
import FileInput from '@/Components/FileInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Dashboard({ auth, settings }) {
    const { data, setData, post, processing, errors } = useForm({
        name: settings.name,
        logo_file: null,
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('settings.store'), {
            preserveScroll: true,
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<Heading>Settings</Heading>}
        >
            <Head title="Settings" />
            <Card
                title="General Settings"
                description="Updates the general settings of the application."
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
                            <InputLabel value="Logo" />
                            {!!settings.logo && (<img src={settings.logo} className="w-16 my-4" />)}
                            <FileInput
                                onChange={(e) => setData('logo_file', e.target.files[0])}
                                className="mt-1 block w-full"
                            />
                            <InputError message={errors.logo_file} className="mt-2" />
                        </div>
                        <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    </form>
                </section>
            </Card>
        </AuthenticatedLayout>
    );
}
