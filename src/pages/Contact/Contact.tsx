import { Input, message } from 'antd';
import { Select } from 'antd';
const { TextArea } = Input;

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { setIsContact } from './contactSlice';
import { Gender } from '../../types/enums/gender';
import { myForm } from '../../types/interfaces/myForm';
import Map from './Map';
import Button from '../../components/Button';
import AnimationTran from '../../components/AnimationTran';
import AnimationScale from '../../components/AnimationScale';

const Contact = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation('contact');

    const schema = yup.object().shape({
        name: yup.string().required(t('yub.nameRequired')),
        email: yup.string().required(t('yub.emailRequired')).email(t('yub.emailFormat')),
        phone: yup
            .string()
            .required(t('yub.phoneRequired'))
            .min(10, t('yub.phone10'))
            .max(11, t('yub.phone11'))
            .test('is-phone', t('yub.phoneFormat'), function (value) {
                if (!value) return true;

                const numericRegex = /^\d+$/;
                return numericRegex.test(value);
            }),
        gender: yup.string().oneOf(Object.values(Gender)).required(t('yub.genderRequired')),
        facebookURL: yup.string().required(t('yub.facebookURLRequired')).url(t('yub.facebookURLFormat')),
        note: yup.string(),
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<myForm>({
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<myForm> = (data) => {
        dispatch(setIsContact(data.name));
        success();
    };

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi
            .open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 2,
            })
            .then(() => message.success('Loading finished', 2));
    };

    return (
        <main className="min-h-screen py-10 px-8 md:px-10 lg:px-20 xl:px-32 bg-black/5 ">
            <div className="grid grid-cols-9 relative">
                <div className="absolute top-2 -left-2 rounded-3xl rounded-tr-none h-full w-full bg-neutral-950/40 -z-10"></div>
                <div className="col-span-9 md:col-span-7 shadow-lg rounded-3xl md:rounded-l-3xl md:rounded-r-none bg-white py-8 px-8 lg:pr-48 lg:pl-8 ">
                    {contextHolder}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <AnimationTran tranY={-50} delay={1.4} className="font-bold">
                                    {t('form.name')}
                                </AnimationTran>
                                <AnimationTran tranY={-50} delay={1.2} className="space-y-2">
                                    <>
                                        <Controller
                                            name="name"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    size="large"
                                                    placeholder={t('form.namePlaceholder')}
                                                />
                                            )}
                                        />
                                        <p className="text-red-600 text-sm">{errors.name?.message}</p>
                                    </>
                                </AnimationTran>
                            </div>
                            <div className="flex flex-col gap-2">
                                <AnimationTran tranY={-50} delay={1.4} className="font-bold">
                                    Email
                                </AnimationTran>
                                <AnimationTran tranY={-50} delay={1.2} className="space-y-2">
                                    <>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    size="large"
                                                    placeholder={t('form.emailPlaceholder')}
                                                />
                                            )}
                                        />
                                        <p className="text-red-600 text-sm">{errors.email?.message}</p>
                                    </>
                                </AnimationTran>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <AnimationTran tranY={-100} delay={1} className="font-bold">
                                    {t('form.phone')}
                                </AnimationTran>
                                <AnimationTran tranY={-100} delay={0.8} className="space-y-2">
                                    <>
                                        <Controller
                                            name="phone"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    size="large"
                                                    placeholder={t('form.phonePlaceholder')}
                                                />
                                            )}
                                        />
                                        <p className="text-red-600 text-sm">{errors.phone?.message}</p>
                                    </>
                                </AnimationTran>
                            </div>
                            <div className="flex flex-col gap-2">
                                <AnimationTran tranY={-100} delay={1} className="font-bold">
                                    {t('form.gender')}
                                </AnimationTran>
                                <AnimationTran tranY={-100} delay={0.8} className="space-y-2">
                                    <>
                                        <Controller
                                            name="gender"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    showSearch
                                                    allowClear
                                                    size="large"
                                                    placeholder={t('form.genderPlaceholder')}
                                                    optionFilterProp="children"
                                                    options={Object.keys(Gender).map((gender) => ({
                                                        value: Gender[gender as keyof typeof Gender],
                                                        label: t(`genderOptions.${gender as keyof typeof Gender}`),
                                                    }))}
                                                    className="w-full"
                                                />
                                            )}
                                        />
                                        <p className="text-red-600 text-sm">{errors.gender?.message}</p>
                                    </>
                                </AnimationTran>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <AnimationTran tranY={-100} delay={0.6} className="font-bold">
                                Facebook URL
                            </AnimationTran>
                            <AnimationTran tranY={-100} delay={0.4} className="space-y-2">
                                <>
                                    <Controller
                                        name="facebookURL"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                size="large"
                                                placeholder={t('form.FacebookURLPlaceholder')}
                                            />
                                        )}
                                    />
                                    <p className="text-red-600 text-sm">{errors.facebookURL?.message}</p>
                                </>
                            </AnimationTran>
                        </div>
                        <div className="flex flex-col gap-2">
                            <AnimationTran tranY={-100} delay={0.2} className="font-bold">
                                {t('form.note')}
                            </AnimationTran>
                            <AnimationTran tranY={-100} className="space-y-2">
                                <>
                                    <Controller
                                        name="note"
                                        control={control}
                                        render={({ field }) => (
                                            <TextArea {...field} rows={6} size="large" maxLength={9} />
                                        )}
                                    />
                                    <p className="text-red-600 text-sm">{errors.note?.message}</p>
                                </>
                            </AnimationTran>
                        </div>
                        <AnimationScale>
                            <Button type="submit" className="w-full bg-primary-700 font-semibold hover:bg-primary-800 ">
                                {t('sendMessage')}
                            </Button>
                        </AnimationScale>
                    </form>
                </div>
                <div className="col-span-9 md:col-span-2 bg-primary-400 relative rounded-r-3xl">
                    <Map className="hidden lg:block absolute top-20 -left-40 h-96 w-full lg:h-3/4 lg:w-[140%] rounded-3xl " />
                </div>
            </div>
        </main>
    );
};

export default Contact;
