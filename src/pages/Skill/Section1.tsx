import { DesktopOutlined, MobileOutlined, InstagramFilled, FacebookFilled, GithubOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import AnimationScale from '../../components/AnimationScale';
import AnimationTran from '../../components/AnimationTran';
import Button from '../../components/Button';

const Section1 = () => {
    const { t } = useTranslation('skill');
    return (
        <section className="grid xl:grid-cols-2 items-center gap-10  px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="h-full flex flex-col justify-center gap-7 my-10 ">
                <AnimationTran tranX={-100} className="text-primary-800 text-3xl font-black">
                    {t('mySkills')}
                </AnimationTran>
                <AnimationTran tranX={-100} delay={0.3} className="text-5xl font-black">
                    <>
                        {t('whyHire')} <span className="text-primary-800">{t('project')}?</span>
                    </>
                </AnimationTran>
                <AnimationTran tranX={-100} delay={0.6}>
                    {t('descriptionHire')}
                </AnimationTran>

                <div>
                    <AnimationTran tranX={-100} delay={0.9}>
                        <>{t('technologies')}.</>
                    </AnimationTran>
                    <div className="flex gap-10">
                        <div>
                            <AnimationTran tranY={100} delay={1.1}>
                                <li>JavaScript (ES6+)</li>
                            </AnimationTran>
                            <AnimationTran tranY={100} delay={1.2}>
                                <li>TailwindCSS</li>
                            </AnimationTran>
                            <AnimationTran tranY={100} delay={1.3}>
                                <li>React</li>
                            </AnimationTran>
                            <AnimationTran tranY={100} delay={1.4}>
                                <li>Vue3</li>
                            </AnimationTran>
                        </div>
                        <div>
                            <AnimationTran tranY={100} delay={1.1}>
                                <li>TypeScript</li>
                            </AnimationTran>
                            <AnimationTran tranY={100} delay={1.2}>
                                <li>Node</li>
                            </AnimationTran>
                            <AnimationTran tranY={100} delay={1.3}>
                                <li>GoLang</li>
                            </AnimationTran>
                            <AnimationTran tranY={100} delay={1.4}>
                                <li>MonggoDB</li>
                            </AnimationTran>
                        </div>
                    </div>
                </div>

                <AnimationScale scale={0.5} delay={1.5} className="mt-10">
                    <a href="https://export-download.canva.com/jHNL4/DAFhGTjHNL4/208/0-1622838068697236592.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240122T065628Z&X-Amz-Expires=40982&X-Amz-Signature=3eafba1499e276f4cf0ba6fd24bb30b14c9552be7d57d1b3ff512c018b87ef52&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27CV_LeVanAnhDuc_en%252Cvi.pdf&response-expires=Mon%2C%2022%20Jan%202024%2018%3A19%3A30%20GMT">
                        <Button className="w-fit h-fit px-10 py-3 !rounded-full bg-primary-700 hover:!bg-primary-800">
                            {t('downloadCV')}
                        </Button>
                    </a>
                </AnimationScale>
            </div>
            <div className="grid grid-cols-2 items-center gap-10">
                <div className="flex flex-col gap-10">
                    <AnimationScale className="grid gap-1.5">
                        <>
                            <DesktopOutlined className="text-4xl text-primary-800" />
                            <div className="text-xl font-bold">Web</div>
                            <div>{t('webDescription')}.</div>
                        </>
                    </AnimationScale>
                    <AnimationScale delay={0.2} className="grid gap-1.5">
                        <>
                            <MobileOutlined className="text-4xl text-primary-800" />
                            <div className="text-xl font-bold">Mobile</div>
                            <div>{t('mobileDescription')}.</div>
                        </>
                    </AnimationScale>
                </div>
                <AnimationScale delay={0.4} className="grid gap-1.5">
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width={'2.25rem'}
                            height={'2.25rem'}
                            fill="#1A8245"
                        >
                            <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" />
                        </svg>
                        <div className="text-xl font-bold">Figma</div>
                        <div>{t('figmaDescription')}</div>
                    </>
                </AnimationScale>
            </div>

            <div className="absolute -right-40 lg:-right-32 rotate-90 text-xl text-primary-700 flex items-start gap-7">
                <AnimationTran tranY={-30} className="mt-3">
                    <>{t('followMeOn')}:</>
                </AnimationTran>
                <AnimationTran
                    tranY={-50}
                    delay={0.3}
                    className="mt-6 border-t-2 border-primary-800  w-20 h-20 "
                ></AnimationTran>
                <div className="flex gap-2">
                    <AnimationTran tranX={100} delay={0.6}>
                        <Button className="h-14 w-14 !rounded-full border-2 border-primary-800 !px-4 hover:bg-primary-300 hover:border-primary-500">
                            <a href="https://www.instagram.com/hi.iam.lvad/" target="_blank">
                                <InstagramFilled className="text-black -rotate-90" />
                            </a>
                        </Button>
                    </AnimationTran>
                    <AnimationTran tranX={100} delay={0.9}>
                        <Button className="h-14 w-14 !rounded-full border-2 border-primary-800 !px-4 hover:bg-primary-300 hover:border-primary-500">
                            <a href="https://www.facebook.com/qb.levananhduc" target="_blank">
                                <FacebookFilled className="text-black -rotate-90" />
                            </a>
                        </Button>
                    </AnimationTran>
                    <AnimationTran tranX={100} delay={1.2}>
                        <Button className="h-14 w-14 !rounded-full border-2 border-primary-800 !px-4 hover:bg-primary-300 hover:border-primary-500">
                            <a href="https://github.com/LeVanAnhDuc" target="_blank">
                                <GithubOutlined className="text-black -rotate-90" />
                            </a>
                        </Button>
                    </AnimationTran>
                </div>
            </div>
        </section>
    );
};

export default Section1;
