import React from 'react';

import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Iprops {
    linkImage: string;
    linkGithub: string;
    linkProject?: string;
    title: string;
    description: string;
    role: string;
    technical: string;
}

const CardProject = (props: Iprops) => {
    const { linkGithub, linkImage, linkProject, title, description, role, technical } = props;

    const { t } = useTranslation('project');
    const [activeTabKey, setActiveTabKey] = React.useState<string>('title');

    const handleActionLinkOnline = () => {
        linkProject && window.open(linkProject, '_blank');
    };
    const handleActionLinkGithub = () => {
        window.open(linkGithub, '_blank');
    };

    const onTabChange = (key: string) => {
        setActiveTabKey(key);
    };
    const contentListNoTitle: Record<string, React.ReactNode> = {
        role: (
            <div className="h-56 overflow-hidden text-ellipsis grid gap-3 ">
                <div className="text-base">{role}</div>
            </div>
        ),
        technical: (
            <div className="h-56 overflow-hidden text-ellipsis grid gap-3 ">
                <div className="text-base">{technical}</div>
            </div>
        ),
        title: (
            <div className="h-56 overflow-hidden text-ellipsis flex flex-col gap-3 ">
                <div className="text-primary-800 text-lg font-bold">{title}</div>
                <div className="text-base">{description}</div>
            </div>
        ),
    };

    return (
        <Card
            className="shadow-lg transition grid grid-cols-2 hover:scale-[1.02]"
            title={
                <img
                    alt="image not found"
                    src={linkImage}
                    className="object-cover h-44 cursor-pointer"
                    onClick={handleActionLinkGithub}
                />
            }
            actions={[
                <motion.div
                    className={`${
                        linkProject === undefined
                            ? 'hover:!text-black/40 cursor-default text-black/40'
                            : 'hover:!text-primary-800'
                    } flex gap-2 place-content-center font-bold text-base text-black `}
                    onClick={handleActionLinkOnline}
                    whileHover={{
                        scale: linkProject && 1.05,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    whileTap={{ scale: linkProject && 0.95 }}
                >
                    UI
                    <LinkOutlined />
                </motion.div>,
                <motion.div
                    className="flex gap-2 place-content-center font-bold text-base text-black hover:!text-primary-800"
                    onClick={handleActionLinkGithub}
                    whileHover={{
                        scale: 1.05,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Code
                    <GithubOutlined />
                </motion.div>,
            ]}
            tabList={[
                {
                    key: 'title',
                    label: t('nav.description'),
                },
                {
                    key: 'role',
                    label: t('nav.role'),
                },
                {
                    key: 'technical',
                    label: t('nav.technology'),
                },
            ]}
            activeTabKey={activeTabKey}
            onTabChange={onTabChange}
        >
            {contentListNoTitle[activeTabKey]}
        </Card>
    );
};

export default CardProject;
