import { Button, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/avatar_about.png';
import config from '../../config';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');

    return (
        <main>
            {/* section 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 flex flex-col gap-10">
                    <p className="text-primary-100 font-bold text-xl uppercase">{t('myIntro')}</p>
                    <h1>{t('aboutMe')}</h1>
                    <p>&quot; {t('desciption')} &quot;</p>
                    <Descriptions bordered contentStyle={{ fontSize: '16px' }} labelStyle={{ fontSize: '16px' }}>
                        <Descriptions.Item label={t('name')} span={2}>
                            Lê Văn Anh Đức
                        </Descriptions.Item>
                        <Descriptions.Item label={t('dateOfBirth')}>18/04/2002</Descriptions.Item>
                        <Descriptions.Item label={t('address')} span={3}>
                            Ho Chi Minh city, VietNam
                        </Descriptions.Item>
                        <Descriptions.Item label="Email" span={3}>
                            levananhduc1804@gmail.com
                        </Descriptions.Item>
                        <Descriptions.Item label={t('phone')} span={3}>
                            033 944 3725
                        </Descriptions.Item>
                        <Descriptions.Item label={t('myHobbies')}>
                            <>
                                {t('listMyHobbies.music')}
                                <br />
                                {t('listMyHobbies.travel')}
                                <br />
                                {t('listMyHobbies.movie')}
                                <br />
                                {t('listMyHobbies.sports')}
                                <br />
                            </>
                        </Descriptions.Item>
                    </Descriptions>
                    <div className="flex flex-wrap gap-3">
                        <Link to={config.Routes.contact}>
                            <Button type="primary" style={{ background: '#65B741', height: '100%' }}>
                                <p className="font-semibold text-lg px-2">{t('contact')}</p>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* image */}
                <div className="flex justify-center h-full w-full items-start">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="object-cover w-full rounded-xl bg-primary-200 shadow-2xl !sticky top-40 z-40 transition mt-10 lg:ml-10"
                    />
                </div>
            </div>
        </main>
    );
};

export default About;
