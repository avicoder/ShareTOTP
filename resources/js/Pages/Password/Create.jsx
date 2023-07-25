import Card from '@/Components/Card';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import DefaultButton from '@/Components/LinkButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Heading } from '@/Components/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import OptionsInput from '@/Components/OptionsInput';
import { optionDigits, optionAlgorithms, optionPeriods } from '@/Lib/Constants';
import InputHelper from '@/Components/InputHelper';
import SelectInput from '@/Components/SelectInput';

export default function Create({ auth, serviceList }) {
    const { data, setData, post, processing, errors } = useForm({
        service_id: serviceList[0].id,
        name: '',
        secret: '',
        digits: optionDigits[0].value,
        algorithm: optionAlgorithms[0].value,
        period: optionPeriods[0].value,
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('passwords.store'), {
            preserveScroll: true,
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <Heading>Create OTP</Heading>
                    <DefaultButton href={route('passwords.index')}>Back</DefaultButton>
                </div>
            }
        >
            <Head title="Create OTP" />

            <Card
                title="Create OTP"
                description="Create new one time password for the platform."
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
        </AuthenticatedLayout>
    );
}
