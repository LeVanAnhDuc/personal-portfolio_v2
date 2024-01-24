import { useTranslation } from 'react-i18next';
import AnimationScale from '../../components/AnimationScale';

const Section2 = () => {
    const { t } = useTranslation('skill');
    return (
        <section className="py-10 px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="grid grid-cols-3">
                <div className="flex flex-col items-center">
                    <AnimationScale delay={0.3} className="text-3xl md:text-7xl text-primary-800 font-bold">
                        1+
                    </AnimationScale>
                    <AnimationScale delay={0.5} className="p-3 md:text-2xl">
                        <>{t('workExperience')} Front-end</>
                    </AnimationScale>
                </div>
                <AnimationScale className="flex flex-col items-center border-x-2 border-primary-800">
                    <>
                        <AnimationScale delay={0.3} className="text-3xl md:text-7xl text-primary-800 font-bold">
                            20+
                        </AnimationScale>
                        <AnimationScale delay={0.5} className="p-3 md:text-2xl">
                            {t('projectCompleted')}
                        </AnimationScale>
                    </>
                </AnimationScale>
                <div className="flex flex-col items-center">
                    <AnimationScale delay={0.3} className="text-3xl md:text-7xl text-primary-800 font-bold">
                        &lt;1
                    </AnimationScale>
                    <AnimationScale delay={0.5} className="p-3 md:text-2xl">
                        <>{t('workExperience')} Back-end</>
                    </AnimationScale>
                </div>
            </div>
        </section>
    );
};

export default Section2;
