import { Link } from 'react-router-dom';
import avatar from '../../assets/img/avatar.jpg';
import config from '../../config';
import { Button } from 'antd';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { selectnameUser } from '../Contact/contactSlice';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const nameUser = useSelector(selectnameUser);

    const { t } = useTranslation('home');

    return (
        <main className="bg-white">
            <Carousel effect="fade" autoplay className="transition" autoplaySpeed={2000} speed={700}>
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="flex justify-center">
                            <img src={avatar} alt="avatar" className="object-cover rounded-xl shadow-2xl h-full " />
                        </div>
                        <div className="absolute top-10 p-10 md:relative lg:col-span-2 flex flex-col items-start justify-center gap-5">
                            <p className="text-primary-100 font-bold text-xl uppercase">{t('banner.major')}</p>
                            <h1>
                                {t('banner.hello')} <span className="text-primary-100">{nameUser}</span>,{' '}
                                {t('banner.nameSlide1')} Lê Văn Anh Đức
                            </h1>
                            <div className="flex flex-wrap gap-3 mt-20">
                                <Link to={config.Routes.project}>
                                    <Button type="primary" style={{ background: '#65B741' }}>
                                        {t('banner.project')}
                                    </Button>
                                </Link>
                                <a href="https://www.facebook.com/qb.levananhduc" target="_blank">
                                    <Button type="default" style={{ border: '1px solid #65B741', color: '#65B741' }}>
                                        FaceBook
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="absolute top-10 p-10 md:relative lg:col-span-2 flex flex-col items-start justify-center gap-5">
                            <p className="text-primary-100 font-bold text-xl uppercase">
                                {t('banner.hi')} <span className="text-black normal-case">{nameUser}</span>!{' '}
                                {t('banner.nameSlide2')} Lê Văn Anh Đức
                            </p>
                            <h1>{t('banner.typeWord')}</h1>
                            <div className="flex flex-wrap gap-3 mt-20">
                                <Link to={config.Routes.project}>
                                    <Button type="primary" style={{ background: '#65B741' }}>
                                        {t('banner.project')}
                                    </Button>
                                </Link>
                                <a href="https://www.facebook.com/qb.levananhduc" target="_blank">
                                    <Button type="default" style={{ border: '1px solid #65B741', color: '#65B741' }}>
                                        FaceBook
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src={avatar} alt="avatar" className="object-cover rounded-xl shadow-2xl h-full " />
                        </div>
                    </div>
                </div>
            </Carousel>
        </main>
    );
};

export default Home;
