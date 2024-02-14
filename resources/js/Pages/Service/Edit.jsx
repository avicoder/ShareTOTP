import Card from '@/Components/Card';
import DestroyButton from '@/Components/DestroyButton';
import FileInput from '@/Components/FileInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import DefaultButton from '@/Components/LinkButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';

export default function Edit({ auth, service }) {
    const { data, setData, processing, patch, errors } = useForm({
        name: service.name,
        icon_file: null,
    })

    const submit = (e) => {
        e.preventDefault()
        router.post(
            route('services.update', [service.id]),
            { _method: 'patch', ...data },
            { preserveScroll: true }
        )
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <Heading>Edit {service.name}</Heading>
                    <DefaultButton href={route('services.index')}>Back</DefaultButton>
                </div>
            }
        >
            <Head title={"Edit " + service.name} />

            <Card
                title="Update Service"
                description="Update service information."
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

            <Card
                title="Delete Record"
                description="Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
            >
                <section className="max-w-xl mt-6">
                    <DestroyButton href={route('services.destroy', [service.id])} />
                </section>
            </Card>

        </AuthenticatedLayout>
    );
}
