import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { selectnameUser } from '../Contact/contactSlice';
import AnimationTran from '../../components/AnimationTran';
import AnimationScale from '../../components/AnimationScale';
import Button from '../../components/Button';
import avatar from '../../assets/img/bg-remove.png';
import config from '../../config';

const Section1 = () => {
    const nameUser = useSelector(selectnameUser);
    const { t } = useTranslation('home');

    return (
        <section className="bg-primary-300/30 px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="min-h-screen grid xl:grid-cols-2 items-center gap-10">
                <div className="h-full flex flex-col justify-center my-10 ">
                    <AnimationTran tranX={-200}>
                        <div className="text-5xl font-bold font-serif">
                            <p>
                                {t('banner.hello')} <span className="text-primary-600">{nameUser}</span>
                                <span className="text-neutral-700">,</span>{' '}
                            </p>
                            <p>
                                {t('banner.nameSlide1')} <span className="text-primary-800">Lê Văn Anh Đức</span>
                            </p>
                        </div>
                    </AnimationTran>
                    <AnimationTran tranX={-100} delay={0.3}>
                        <p className="text-primary-800 font-bold text-xl uppercase">{t('banner.major')}</p>
                    </AnimationTran>
                    <div className="flex flex-wrap gap-3 mt-20  pl-1">
                        <AnimationScale delay={0.6}>
                            <Link to={config.Routes.project}>
                                <Button className=" bg-primary-700 hover:!bg-primary-800 ">
                                    {t('banner.project')}
                                </Button>
                            </Link>
                        </AnimationScale>
                        <AnimationScale delay={0.6}>
                            <a href="https://www.facebook.com/qb.levananhduc" target="_blank">
                                <Button className="border-primary-700 !text-primary-700 hover:!bg-primary-100 ">
                                    FaceBook
                                </Button>
                            </a>
                        </AnimationScale>
                    </div>
                </div>
                <div className="w-full h-[32rem] xl:h-full relative xl:pr-32">
                    <div className="w-[26rem] h-full relative flex m-auto ">
                        <AnimationTran
                            tranY={-100}
                            delay={0.3}
                            className="absolute top-6 xl:top-[20%] right-[8%] xl:right-[12%] border-2 border-primary-800 w-[24rem] h-[22rem] rounded-tr-[4rem] rounded-bl-[4rem] -z-0"
                        ></AnimationTran>
                        <AnimationTran
                            tranY={100}
                            delay={0.3}
                            className="absolute top-10 xl:top-[22%] right-[4%] xl:right-[8%] bg-neutral-50 w-[24rem] h-[22rem] text-xl py-10 pr-20 pl-10 rounded-tr-[4rem] rounded-bl-[4rem] z-0"
                        >
                            <>
                                <AnimationScale delay={0.6} className="text-6xl font-serif font-bold">
                                    ‘‘
                                </AnimationScale>
                                <AnimationScale delay={0.9} className="text-base font-medium text-justify">
                                    {t('banner.infoMajor')}
                                </AnimationScale>
                                <AnimationScale delay={1.2} className="mt-10 text-base font-medium text-primary-700">
                                    - Le Van Anh Duc -
                                </AnimationScale>
                                <div className="absolute -bottom-24 -right-14 sm:-right-32  pr-10">
                                    <div className="relative h-full w-full">
                                        <AnimationTran
                                            tranX={100}
                                            delay={1.4}
                                            className="bg-[#E5B299] h-52 w-48 rounded-2xl shadow-2xl z-10"
                                        ></AnimationTran>
                                        <AnimationScale delay={1.6} className="absolute -top-20 z-10">
                                            <img src={avatar} alt="avatar" className="object-cover h-72 w-full" />
                                        </AnimationScale>
                                        <AnimationTran
                                            tranX={-100}
                                            delay={1.4}
                                            className="absolute -bottom-1.5 -right-1.5 bg-neutral-900 h-52 w-48 rounded-2xl -z-10"
                                        ></AnimationTran>
                                    </div>
                                </div>
                            </>
                        </AnimationTran>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
