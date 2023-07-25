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
import { optionDigits, optionAlgorithms, optionPeriods } from '@/Lib/Constants';
import SelectInput from '@/Components/SelectInput';
import OptionsInput from '@/Components/OptionsInput';
import InputHelper from '@/Components/InputHelper';

export default function Edit({ auth, password, serviceList }) {
    const { data, setData, patch, processing, errors } = useForm({
        service_id: password.service_id,
        name: password.name,
        secret: password.secret,
        digits: password.digits,
        algorithm: password.algorithm,
        period: password.period,
    })

    const submit = (e) => {
        e.preventDefault()
        patch(route('passwords.update', [password.id]), {
            preserveScroll: true,
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <Heading>Edit {password.name}</Heading>
                    <DefaultButton href={route('passwords.index')}>Back</DefaultButton>
                </div>
            }
        >
            <Head title={"Edit " + password.name} />

            <Card
                title="Update Details"
                description="Update platform OTP information."
            >
                <section className="max-w-xl mt-6">
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <SelectInput
                                label="Service"
                                value={data.service_id}
                                onChange={(v) => setData('service_id', v.id)}
                                options={serviceList}
                            />
                            <InputError message={errors.service_id} className="mt-2" />
                        </div>
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
                            <InputLabel value="Secret" />
                            <TextInput
                                value={data.secret}
                                onChange={(e) => setData('secret', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            <InputHelper value="The key used to generate your security codes" />
                            <InputError message={errors.secret} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel value="Digits" />
                            <OptionsInput
                                value={data.digits}
                                onChange={(v) => setData('digits', v)}
                                options={optionDigits}
                            />
                            <InputHelper value="The number of digits of the generated security codes" />
                            <InputError message={errors.digits} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel value="Algorithm" />
                            <OptionsInput
                                value={data.algorithm}
                                onChange={(v) => setData('algorithm', v)}
                                options={optionAlgorithms}
                            />
                            <InputHelper value="The algorithm used to secure your security codes" />
                            <InputError message={errors.algorithm} className="mt-2" />
                        </div>
                        <div>
                            <InputLabel value="Period" />
                            <OptionsInput
                                value={data.period}
                                onChange={(v) => setData('period', v)}
                                options={optionPeriods}
                            />
                            <InputHelper value="The period of validity of the generated security codes in second" />
                            <InputError message={errors.period} className="mt-2" />
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
                    <DestroyButton href={route('passwords.destroy', [password.id])} />
                </section>
            </Card>
        </AuthenticatedLayout>
    );
}
