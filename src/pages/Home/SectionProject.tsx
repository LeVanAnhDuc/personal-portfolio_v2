import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AnimationTran from '../../components/AnimationTran';
import CardProject from '../../components/CardProject';
import config from '../../config';
import Button from '../../components/Button';
import AnimationScale from '../../components/AnimationScale';
import { imgProject } from '../../assets/img/projects';

const SectionProject = () => {
    const { t } = useTranslation(['project', 'home']);
    return (
        <section className="pt-10  px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="flex place-content-between place-items-center mb-7">
                <AnimationTran tranY={-100} delay={0.3} className="text-primary-800 text-4xl font-black">
                    {t('home:project.myProjects')}
                </AnimationTran>
                <AnimationScale>
                    <Link to={config.Routes.project}>
                        <Button className="underline underline-offset-2 !text-primary-700 text-xl border-transparent">
                            {t('home:project.seeMore')}
                        </Button>
                    </Link>
                </AnimationScale>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                <AnimationTran tranY={200}>
                    <CardProject
                        linkGithub="https://github.com/LeVanAnhDuc/personal-portfolio_v2"
                        linkImage={imgProject.personal_portfolio_v2}
                        linkProject="https://personal-portfolio-v2-nine.vercel.app/"
                        role={t('websiteIntroducingMyself.role')}
                        technical="React, TypeScript, AntD, Tailwindcss, i18next, Framer-motion, Redux Toolkit, React-hook-form,..."
                        title={t('websiteIntroducingMyself.title')}
                        description={t('websiteIntroducingMyself.description')}
                    />
                </AnimationTran>
                <AnimationTran tranY={200} delay={0.2}>
                    <CardProject
                        linkGithub="https://github.com/LeVanAnhDuc/fe-user-TLCN"
                        linkImage={imgProject.user_duck}
                        linkProject="https://fe-user-tlcn-duckshop.vercel.app/"
                        role={t('DuckFashionWebsite.role')}
                        technical="React, TypeScript, MUI, Tailwindcss, React-hook-form, Redux Toolkit,..."
                        title={t('DuckFashionWebsite.title')}
                        description={t('DuckFashionWebsite.description')}
                    />
                </AnimationTran>
            </div>
        </section>
    );
};

export default SectionProject;
