import CardProject from '../../components/CardProject/CardProject';
import user_duck from '../../assets/img/user_duck.png';
import admin_duck from '../../assets/img/admin_duck.png';
import user_stellar from '../../assets/img/user_stellar.png';
import admin_stellar from '../../assets/img/admin_stellar.png';
import personal_portfolio from '../../assets/img/personal-portfolio.png';
import { useTranslation } from 'react-i18next';
const Project = () => {
    const { t } = useTranslation('project');
    return (
        <main className="flex flex-col items-center">
            {/* section 1 */}
            <p className="text-primary-100 font-bold text-xl uppercase">{t('projects')}</p>
            <h1 className="mb-5">{t('desciptionProjects')}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <CardProject
                    linkGithub="https://github.com/LeVanAnhDuc/fe-user-TLCN"
                    linkImage={user_duck}
                    linkProject="https://fe-user-tlcn-duckshop.vercel.app/"
                    role={t('DuckFashionWebsite.role')}
                    technical="React, TypeScript, MUI, Tailwindcss, React-hook-form, Redux Toolkit,..."
                    title={t('DuckFashionWebsite.title')}
                    description={t('DuckFashionWebsite.description')}
                />
                <CardProject
                    linkGithub="https://github.com/LeVanAnhDuc/fe-admin-TLCN"
                    linkImage={admin_duck}
                    linkProject="https://fe-admin-tlcn.vercel.app/"
                    role={t('DuckFashionWebsiteAdmin.role')}
                    technical="React, TypeScript, MUI, Tailwindcss, React-hook-form,..."
                    title={t('DuckFashionWebsiteAdmin.title')}
                    description={t('DuckFashionWebsiteAdmin.description')}
                />
                <CardProject
                    linkGithub="https://github.com/LeVanAnhDuc/fe-stellar"
                    linkImage={user_stellar}
                    linkProject="https://fe-stellar.vercel.app/"
                    role={t('StellarHotelWebsite.role')}
                    technical="React, React Bootstrap, Redux/toolkit, Scss ..."
                    title={t('StellarHotelWebsite.title')}
                    description={t('StellarHotelWebsite.description')}
                />
                <CardProject
                    linkGithub="https://github.com/LeVanAnhDuc/fe-stellar-admin"
                    linkImage={admin_stellar}
                    linkProject="https://fe-stellar-admin.vercel.app/"
                    role={t('StellarHotelWebsiteAdmin.role')}
                    technical="React, React Bootstrap, Redux/toolkit, Scss ..."
                    title={t('StellarHotelWebsiteAdmin.title')}
                    description={t('StellarHotelWebsiteAdmin.description')}
                />
                <CardProject
                    linkGithub="https://github.com/LeVanAnhDuc/Personal_Portfolio"
                    linkImage={personal_portfolio}
                    linkProject="https://personal-portfolio-ten-red.vercel.app/"
                    role={t('websiteIntroducingMyself.role')}
                    technical="Next, TypeScript, Antd, Tailwindcss..."
                    title={t('websiteIntroducingMyself.title')}
                    description={t('websiteIntroducingMyself.description')}
                />
               
            </div>
        </main>
    );
};

export default Project;
