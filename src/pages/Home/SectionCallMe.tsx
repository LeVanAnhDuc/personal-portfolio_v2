import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import AnimationScale from '../../components/AnimationScale';
import Button from '../../components/Button';

const SectionCallMe = () => {
    const { t } = useTranslation('home');

    return (
        <section className="flex flex-col place-items-center gap-7 py-20">
            <div className="flex items-center gap-5">
                <motion.svg
                    viewBox="0 0 24 24"
                    height={150}
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible stroke-primary-600 stroke-1.5"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <motion.path
                            d="M12.0678 2.14611C12.3883 2.00663 12.7431 1.96564 13.0874 2.02906C13.4316 2.09244 13.7478 2.25698 13.9973 2.49935L22.459 10.7164C22.6312 10.8837 22.7672 11.0838 22.8599 11.3041C22.9525 11.5244 23 11.7609 23 11.9994C23 12.238 22.9525 12.4744 22.8599 12.6947C22.7672 12.9151 22.6309 13.1154 22.4587 13.2827L13.9972 21.4997C13.7476 21.742 13.4316 21.9064 13.0874 21.9698C12.7431 22.0332 12.3883 21.9922 12.0678 21.8528C11.7474 21.7134 11.4771 21.4826 11.2883 21.1916C11.0997 20.9008 11.0001 20.5617 11 20.2164L11 17.0208C8.70545 17.1206 7.26436 17.5717 6.17555 18.2297C4.90572 18.9971 4.01283 20.0973 2.77837 21.6278C2.5122 21.9578 2.06688 22.0841 1.66711 21.943C1.26733 21.8018 1 21.424 1 21C1 17.4414 1.5013 13.9586 3.15451 11.341C4.72577 8.85318 7.25861 7.26795 11 7.03095L11 3.78241C11.0001 3.43711 11.0997 3.09808 11.2883 2.80727C11.4771 2.51629 11.7474 2.2855 12.0678 2.14611Z"
                            initial={{
                                pathLength: 0,
                                fill: 'rgba(255, 255, 255, 0)',
                            }}
                            animate={{ pathLength: 1, fill: '#2CD673' }}
                            transition={{
                                default: { duration: 2, ease: 'backOut', repeat: Infinity, repeatDelay: 0.2 },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1], repeat: Infinity, repeatDelay: 0.2 },
                            }}
                        ></motion.path>
                    </g>
                </motion.svg>
                <AnimationScale>
                    <a href="mailto:levananhduc1804@gmail.com">
                        <Button className="min-w-40 h-fit px-10 py-3 !rounded-full bg-primary-700 hover:!bg-primary-800">
                            {t('callMe.callMe')}
                        </Button>
                    </a>
                </AnimationScale>
                <motion.svg
                    viewBox="0 0 24 24"
                    height={150}
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible stroke-primary-600 stroke-1.5"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <motion.path
                            d="M11.9322 2.14611C11.6117 2.00663 11.2569 1.96564 10.9126 2.02906C10.5684 2.09244 10.2522 2.25698 10.0027 2.49935L1.54101 10.7164C1.36883 10.8837 1.23276 11.0838 1.14013 11.3041C1.04752 11.5244 1 11.7609 1 11.9994C1 12.238 1.04752 12.4744 1.14013 12.6947C1.23276 12.9151 1.36907 13.1154 1.54125 13.2827L10.0028 21.4997C10.2524 21.742 10.5684 21.9064 10.9126 21.9698C11.2569 22.0332 11.6117 21.9922 11.9322 21.8528C12.2526 21.7134 12.5229 21.4826 12.7117 21.1916C12.9003 20.9008 12.9999 20.5617 13 20.2164L13 17.0208C15.2945 17.1206 16.7356 17.5717 17.8244 18.2297C19.0943 18.9971 19.9872 20.0973 21.2216 21.6278C21.4878 21.9578 21.9331 22.0841 22.3329 21.943C22.7327 21.8018 23 21.424 23 21C23 17.4414 22.4987 13.9586 20.8455 11.341C19.2742 8.85318 16.7414 7.26795 13 7.03095L13 3.78241C12.9999 3.43711 12.9003 3.09808 12.7117 2.80727C12.5229 2.51629 12.2526 2.2855 11.9322 2.14611Z"
                            initial={{
                                pathLength: 0,
                                fill: 'rgba(255, 255, 255, 0)',
                            }}
                            animate={{ pathLength: 1, fill: '#2CD673' }}
                            transition={{
                                default: { duration: 2, ease: 'backOut', repeat: Infinity, repeatDelay: 0.2 },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1], repeat: Infinity, repeatDelay: 0.2 },
                            }}
                        ></motion.path>
                    </g>
                </motion.svg>
            </div>
        </section>
    );
};

export default SectionCallMe;
