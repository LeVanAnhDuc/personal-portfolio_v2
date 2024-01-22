import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import { Descriptions } from 'antd';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import Button from '../../components/Button';
import avatar from '../../assets/img/bg-remove.png';
import config from '../../config';
import AnimationScale from '../../components/AnimationScale';
import AnimationTran from '../../components/AnimationTran';

const SectionAboutMe = () => {
    const { t } = useTranslation('home');
    return (
        <section className="my-10 px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="grid lg:grid-cols-2">
                <div className="h-full w-full flex justify-center p-20 relative ">
                    <AnimationScale>
                        <img src={avatar} alt="avatar" className="object-cover rounded-xl h-[32rem] w-full " />
                    </AnimationScale>
                    <motion.a
                        initial={{ rotate: -12 }}
                        animate={{
                            scale: [1, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1],
                            x: [40, 30, 20, 10, 0, 10, 20, 30, 40],
                            y: [40, 30, 20, 10, 0, 10, 20, 30, 40],
                        }}
                        transition={{
                            duration: 1,
                            ease: 'linear',
                            times: [0, 0.2, 0.5, 0.8, 1, 0.8, 0.5, 0.2],
                            repeat: Infinity,
                            repeatDelay: 0.2,
                        }}
                        className="absolute top-40 left-14 flex justify-center items-center bg-white/60 h-20 w-20 rounded-2xl cursor-pointer hover:bg-primary-400/60"
                        href="https://github.com/LeVanAnhDuc"
                        target="_blank"
                    >
                        <GithubOutlined className="text-5xl" />
                    </motion.a>
                    <motion.a
                        initial={{ rotate: 12 }}
                        animate={{
                            scale: [1, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1],
                            x: [0, 10, 20, 30, 40, 30, 20, 10, 0],
                            y: [0, 10, 20, 30, 40, 30, 20, 10, 0],
                        }}
                        transition={{
                            duration: 1,
                            ease: 'linear',
                            times: [0, 0.2, 0.5, 0.8, 1, 0.8, 0.5, 0.2],
                            repeat: Infinity,
                            repeatDelay: 0.2,
                        }}
                        className="absolute bottom-32 right-14 flex justify-center items-center bg-white/60 h-20 w-20 rounded-2xl cursor-pointer hover:bg-primary-400/60"
                        href="https://www.linkedin.com/in/le-van-anh-duc-16a713264/"
                        target="_blank"
                    >
                        <LinkedinOutlined className="text-5xl" />
                    </motion.a>
                    <motion.a
                        initial={{ rotate: -12 }}
                        animate={{
                            scale: [1, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1],
                            x: [0, -10, -20, -30, -40, -30, -20, -10, 0],
                            y: [0, 10, 20, 30, 40, 30, 20, 10, 0],
                        }}
                        transition={{
                            duration: 1,
                            ease: 'linear',
                            times: [0, 0.2, 0.5, 0.8, 1, 0.8, 0.5, 0.2],
                            repeat: Infinity,
                            repeatDelay: 0.2,
                        }}
                        className="absolute bottom-48 left-14 flex justify-center items-center bg-white/60 h-20 w-20 rounded-2xl cursor-pointer hover:bg-primary-400/60"
                        href="https://www.instagram.com/hi.iam.lvad/"
                        target="_blank"
                    >
                        <InstagramOutlined className="text-5xl" />
                    </motion.a>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="absolute top-40 right-64 h-2 w-2 rounded-full bg-primary-800/80"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="absolute top-36 right-60 h-3 w-3 rounded-full bg-primary-800/80"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="absolute top-32 right-56 h-4 w-4 rounded-full bg-primary-800/80"
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 1, 1, 1, 0],
                        }}
                        transition={{
                            delay: 0.9,
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="absolute top-12 right-5 flex flex-col justify-center items-center bg-white/60  w-fit rounded-2xl px-5 py-3 "
                    >
                        <div className="text-lg font-bold">FullStack Developer</div>
                        <div className="font-semibold text-primary-700">ReactJs NodeJs</div>
                    </motion.div>
                </div>
                <div className="flex flex-col gap-8">
                    <AnimationTran tranX={200} className="text-primary-800 text-4xl font-black">
                        {t('about.aboutMe')}
                    </AnimationTran>
                    <AnimationTran tranX={200} delay={0.3}>
                        <>&quot; {t('about.desciption')} &quot;</>
                    </AnimationTran>
                    <AnimationScale scale={0.5} delay={0.6}>
                        <Descriptions bordered>
                            <Descriptions.Item label={t('about.name')} span={2}>
                                <AnimationTran tranY={30} delay={1}>
                                    Lê Văn Anh Đức
                                </AnimationTran>
                            </Descriptions.Item>
                            <Descriptions.Item label={t('about.dateOfBirth')}>
                                <AnimationTran tranY={30} delay={1.1}>
                                    18/04/2002
                                </AnimationTran>
                            </Descriptions.Item>
                            <Descriptions.Item label={t('about.address')} span={3}>
                                <AnimationTran tranY={30} delay={1.2}>
                                    Ho Chi Minh city, VietNam
                                </AnimationTran>
                            </Descriptions.Item>
                            <Descriptions.Item label="Email" span={3}>
                                <AnimationTran tranY={30} delay={1.3}>
                                    levananhduc1804@gmail.com
                                </AnimationTran>
                            </Descriptions.Item>
                            <Descriptions.Item label={t('about.phone')} span={3}>
                                <AnimationTran tranY={30} delay={1.4}>
                                    033 944 3725
                                </AnimationTran>
                            </Descriptions.Item>
                            <Descriptions.Item label={t('about.myHobbies')}>
                                <>
                                    <AnimationTran tranY={30} delay={1.5}>
                                        {t('about.listMyHobbies.music')}
                                    </AnimationTran>
                                    <AnimationTran tranY={30} delay={1.6}>
                                        {t('about.listMyHobbies.travel')}
                                    </AnimationTran>
                                    <AnimationTran tranY={30} delay={1.6}>
                                        {t('about.listMyHobbies.movie')}
                                    </AnimationTran>
                                    <AnimationTran tranY={30} delay={1.7}>
                                        {t('about.listMyHobbies.sports')}
                                    </AnimationTran>
                                </>
                            </Descriptions.Item>
                        </Descriptions>
                    </AnimationScale>
                    <div className="flex gap-4 place-items-center">
                        <AnimationTran tranX={200} delay={0.9}>
                            <Link to={config.Routes.contact}>
                                <Button className="bg-primary-700 hover:!bg-primary-800">
                                    <p className="font-semibold text-lg px-2">{t('about.contact')}</p>
                                </Button>
                            </Link>
                        </AnimationTran>
                        <AnimationTran
                            tranX={200}
                            delay={1.1}
                            className="border-b-2 border-primary-800 w-20 h-fit flex m-auto mx-0"
                        ></AnimationTran>
                        <AnimationTran tranX={200} delay={1.3} className="font-semibold text-lg">
                            {t('about.followMe')}
                        </AnimationTran>
                        <div className="flex gap-2">
                            <AnimationTran tranX={200} delay={1.5}>
                                <Button className="!rounded-full !px-4 hover:bg-primary-200 hover:border-primary-300">
                                    <a href="https://www.instagram.com/hi.iam.lvad/" target="_blank">
                                        <InstagramFilled className="text-black text-xl" />
                                    </a>
                                </Button>
                            </AnimationTran>
                            <AnimationTran tranX={200} delay={1.7}>
                                <Button className="!rounded-full !px-4 hover:bg-primary-200 hover:border-primary-300">
                                    <a href="https://www.facebook.com/qb.levananhduc" target="_blank">
                                        <FacebookFilled className="text-black text-xl" />
                                    </a>
                                </Button>
                            </AnimationTran>
                            <AnimationTran tranX={200} delay={1.9}>
                                <Button className="!rounded-full !px-4 hover:bg-primary-200 hover:border-primary-300">
                                    <a href="https://github.com/LeVanAnhDuc" target="_blank">
                                        <GithubOutlined className="text-black text-xl" />
                                    </a>
                                </Button>
                            </AnimationTran>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAboutMe;
