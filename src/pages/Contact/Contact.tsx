import { Input, message } from 'antd';
import { Select } from 'antd';
const { TextArea } = Input;

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setIsContact } from './contactSlice';
import { useTranslation } from 'react-i18next';
import { Gender } from '../../types/enums/gender';
import { myForm } from '../../types/interfaces/myForm';

const schema = yup.object().shape({
    name: yup.string().required('First Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    phone: yup
        .string()
        .required('Phone is required')
        .min(10, 'Phone must be at least 10 digits')
        .max(11, 'Phone must be at most 11 digits')
        .test('is-phone', 'Invalid phone format', function (value) {
            if (!value) return true;

            const numericRegex = /^\d+$/;
            return numericRegex.test(value);
        }),
    gender: yup.string().oneOf(Object.values(Gender)).required('Gender is required'),
    facebookURL: yup.string().required('facebookURL is required').url(),
    note: yup.string(),
});

const Contact = () => {
    // redux
    const dispatch = useDispatch();

    const { t } = useTranslation('contact');
    //form
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<myForm>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<myForm> = (data) => {
        dispatch(setIsContact(data.name));
        console.log(data);
        success();
    };
    // toast
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi
            .open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 2,
            })
            .then(() => message.success('Loading finished', 2));
        // .then(() => message.info('Loading finished', 2.5));
    };

    return (
        <main>
            {contextHolder}
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold">{t('form.name')}</label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input {...field} size="large" placeholder={t('form.namePlaceholder')} />
                            )}
                        />
                        <p className="text-red-600 text-sm">{errors.name?.message}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input {...field} size="large" placeholder={t('form.emailPlaceholder')} />
                            )}
                        />
                        <p className="text-red-600 text-sm">{errors.email?.message}</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold">{t('form.phone')}</label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <Input {...field} size="large" placeholder={t('form.phonePlaceholder')} />
                            )}
                        />
                        <p className="text-red-600 text-sm">{errors.phone?.message}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold">{t('form.gender')}</label>
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
                                        value: Gender[gender as keyof typeof Gender], // Access enum value using key
                                        label: t(`genderOptions.${gender as keyof typeof Gender}`),
                                    }))}
                                />
                            )}
                        />
                        <p className="text-red-600 text-sm">{errors.gender?.message}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Facebook URL</label>
                    <Controller
                        name="facebookURL"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} size="large" placeholder={t('form.FacebookURLPlaceholder')} />
                        )}
                    />
                    <p className="text-red-600 text-sm">{errors.facebookURL?.message}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">{t('form.note')}</label>
                    <Controller
                        name="note"
                        control={control}
                        render={({ field }) => <TextArea {...field} rows={6} size="large" maxLength={9} />}
                    />
                    <p className="text-red-600 text-sm">{errors.note?.message}</p>
                </div>

                <button
                    type="submit"
                    className="flex place-content-center p-2 rounded-lg transition bg-primary-100 text-white font-semibold text-base hover:bg-primary-300 hover:text-black"
                >
                    {t('sendMessage')}
                </button>
            </form>
        </main>
    );
};

export default Contact;
