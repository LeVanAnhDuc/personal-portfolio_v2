import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Button from '../../components/Button';
import AnimationTran from '../../components/AnimationTran';
import AnimationScale from '../../components/AnimationScale';
import { useTranslation } from 'react-i18next';

const SectionExperience = () => {
    const { t } = useTranslation('home');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="bg-primary-200/30 py-10 px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="grid lg:grid-cols-5 gap-10 ">
                <div className="lg:col-span-2 flex flex-col gap-5">
                    <AnimationTran tranY={-100} delay={0.3} className="text-primary-800 text-4xl font-black">
                        {t('experience.myExperience')}
                    </AnimationTran>
                    <AnimationTran tranY={-100}>{t('experience.descriptionExperience')}</AnimationTran>
                    <motion.svg
                        ref={ref}
                        xmlns="http://www.w3.org/2000/svg"
                        height="250"
                        viewBox="0 0 91 91"
                        className="flex place-content-center -rotate-45 overflow-visible stroke-primary-600 stroke-2 stroke-linejoin-round stroke-linecap-round"
                    >
                        <motion.path
                            d="M18.7,1.7c-10,14.9,1.2,30.7,15.2,37.5c-0.5,8.8,0.7,18.1,0.5,26.8c-3.4-4.9-6.9-9.7-11.9-13.1   c-3.8-2.6-7.6,2.3-5.8,5.8c3.1,6.2,7.9,11.7,11.6,17.6c2.8,4.4,5.8,10,10.1,13c2,1.4,4.9,0.7,6.6-0.9c3.5-3.3,5.1-9.3,7.4-13.6   c2.8-5.2,5.9-10.1,9.1-15.1c3.8-5.9-5.2-10.7-9.2-5.4C49.6,58,47.2,62,44.9,66c-0.2-6.2-1.1-15-0.8-23.2c6.3,1.5,12.9,1.6,19.1-0.6   C70.5,39.7,77.5,33,77,24.6C75.8,5.7,50.3,6.6,41,18.2c-2.5,3.1-4.1,6.4-5.2,9.9C26.2,23.5,18.9,14,21.5,2.9   C21.8,1.1,19.6,0.2,18.7,1.7z M58.3,20c5,0,9.2,3.9,5.5,8.5c-2.1,2.6-7.1,3.1-10.1,3.2c-2.7,0.1-5.3-0.1-8-0.5   C47.4,24.6,51.1,20,58.3,20z"
                            initial={{
                                pathLength: 0,
                                fill: 'rgba(255, 255, 255, 0)',
                            }}
                            animate={isInView && { pathLength: 1, fill: '#2CD673' }}
                            transition={{
                                default: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.2 },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1], repeat: Infinity, repeatDelay: 0.2 },
                            }}
                        />
                    </motion.svg>
                    <AnimationScale className="w-full flex place-content-end">
                        <a href="https://export-download.canva.com/jHNL4/DAFhGTjHNL4/208/0-1622838068697236592.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240122T065628Z&X-Amz-Expires=40982&X-Amz-Signature=3eafba1499e276f4cf0ba6fd24bb30b14c9552be7d57d1b3ff512c018b87ef52&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27CV_LeVanAnhDuc_en%252Cvi.pdf&response-expires=Mon%2C%2022%20Jan%202024%2018%3A19%3A30%20GMT">
                            <Button className="w-fit h-fit px-10 py-3 !rounded-full bg-primary-700 hover:!bg-primary-800">
                                {t('experience.downloadCV')}
                            </Button>
                        </a>
                    </AnimationScale>
                </div>
                <div className="lg:col-span-3">
                    <div className="flex gap-5">
                        <AnimationTran tranY={-100} className="min-w-40">
                            (12/2023 - 2/2024)
                        </AnimationTran>
                        <AnimationTran tranX={-100} duration={0.7} className="relative h-72 w-1.5 bg-primary-300">
                            <AnimationTran
                                tranY={100}
                                delay={0.3}
                                className="absolute -left-1.5 h-4 w-4 rounded-full bg-primary-700"
                            ></AnimationTran>
                        </AnimationTran>
                        <div>
                            <AnimationTran tranY={100} delay={0.3} className="text-2xl font-black">
                                {t('experience.nameCompany.AppsCyclone')}
                            </AnimationTran>
                            <div>
                                <AnimationTran tranY={100} delay={0.4}>
                                    <li>{t('experience.workAppCyclone')}</li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.5} className="font-black">
                                    {t('experience.technologies')}
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.6}>
                                    <li>
                                        Next, Vite, TypeScript, i18next, framer-motion, TailwindCSS, AntDesign, Mui,
                                        swiper, yub + react-hook-form, Redux Toolkit,...
                                    </li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.7} className="font-black">
                                    {t('experience.projects')}
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.8}>
                                    <li>
                                        <a
                                            href="https://github.com/LeVanAnhDuc/eCom-intern-2"
                                            target="_blank"
                                            className="underline underline-offset-2 text-primary-700 hover:text-primary-800"
                                        >
                                            eCom-intern-2
                                        </a>
                                    </li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.9}>
                                    <li>
                                        <a
                                            href="https://github.com/LeVanAnhDuc/personal-portfolio_v2"
                                            target="_blank"
                                            className="underline underline-offset-2 text-primary-700 hover:text-primary-800"
                                        >
                                            personal-portfolio_v2
                                        </a>
                                    </li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={1}>
                                    <li>
                                        <a
                                            href="https://github.com/LeVanAnhDuc/Personal_Portfolio"
                                            target="_blank"
                                            className="underline underline-offset-2 text-primary-700 hover:text-primary-800"
                                        >
                                            personal-portfolio_v1
                                        </a>
                                    </li>
                                </AnimationTran>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <AnimationTran tranY={-100} className="min-w-40">
                            (6/2023 - 10/2023)
                        </AnimationTran>
                        <AnimationTran tranX={-100} duration={0.7} className="relative h-72 w-1.5 bg-primary-300">
                            <AnimationTran
                                tranY={100}
                                delay={0.3}
                                className="absolute -left-1.5 h-4 w-4 rounded-full bg-primary-700"
                            ></AnimationTran>
                        </AnimationTran>
                        <div>
                            <AnimationTran tranY={100} delay={0.3} className="text-2xl font-black">
                                {t('experience.nameCompany.UPTECH')}
                            </AnimationTran>
                            <div>
                                <AnimationTran tranY={100} delay={0.4}>
                                    <li>{t('experience.workUptech')}</li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.5} className="font-black">
                                    {t('experience.technologies')}
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.6}>
                                    <li>
                                        Sass, classnames, React Bootstrap, cloudinary, mongoose, vn-payments, axios,
                                        Redux, bcrypt, tippy, fontawesome,...
                                    </li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.7} className="font-black">
                                    {t('experience.projects')}
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.8}>
                                    <li>
                                        <a
                                            href="https://github.com/LeVanAnhDuc/eCom-intern-2"
                                            target="_blank"
                                            className="underline underline-offset-2 text-primary-700 hover:text-primary-800"
                                        >
                                            eCom-intern-2
                                        </a>
                                    </li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={0.9}>
                                    <li>
                                        <a
                                            href="https://github.com/LeVanAnhDuc/fe-stellar-admin"
                                            target="_blank"
                                            className="underline underline-offset-2 text-primary-700 hover:text-primary-800"
                                        >
                                            FE-StellarHotel-Admin
                                        </a>
                                    </li>
                                </AnimationTran>
                                <AnimationTran tranY={100} delay={1}>
                                    <li>
                                        <a
                                            href="https://github.com/NguyetQue14062002/StellarHotel_API"
                                            target="_blank"
                                            className="underline underline-offset-2 text-primary-700 hover:text-primary-800"
                                        >
                                            StellarHotel_API
                                        </a>
                                    </li>
                                </AnimationTran>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionExperience;
