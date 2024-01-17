import { useTranslation } from 'react-i18next';

const Skill = () => {
    const { t } = useTranslation('skill');
    return (
        <main className="flex flex-col items-center">
            <p className="text-primary-100 font-bold text-xl uppercase">{t('skills')}</p>
            <h1>{t('mySkills')}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                <div className="flex flex-wrap gap-3 shadow-md p-5 bg-white rounded-xl hover:scale-105 transition">
                    <h2 className="text-center w-full">Front-end</h2>
                    <div className="flex flex-wrap gap-10">
                        <ul>
                            <li>React, Next</li>
                            <li>Vue3</li>
                            <li>TypeScript</li>
                            <li>SCSS, Tailwind, Responsive</li>
                            <li>Figma</li>
                            <li>Mui, Chakra, Ant</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 shadow-md p-5 bg-white rounded-xl hover:scale-105 transition">
                    <h2 className="text-center w-full">Back-end</h2>
                    <ul>
                        <li>Java</li>
                        <li>GoLang</li>
                        <li>C#</li>
                        <li>MS SQL, MonggoDB, SQL Server</li>
                        <li>RESTFUL API</li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-3 shadow-md p-5 bg-white rounded-xl hover:scale-105 transition">
                    <h2 className="text-center w-full">{t('workExperience')}</h2>
                    <ul>
                        <li>{t('workExperienceDesciption.UPTECH')} (6/2023 - 10/2023)</li>
                        <li>{t('workExperienceDesciption.AppsCyclone')} (12/2023 - 2/2023)</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Skill;
