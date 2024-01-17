import React from 'react';

import { GithubOutlined, EllipsisOutlined, LinkOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

const { Meta } = Card;

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

    const handleActionLinkOnline = () => {
        window.open(linkProject, '_blank');
    };
    const handleActionLinkGithub = () => {
        window.open(linkGithub, '_blank');
    };

    const [activeTabKey2, setActiveTabKey2] = React.useState<string>('title');
    const onTab2Change = (key: string) => {
        setActiveTabKey2(key);
    };
    const contentListNoTitle: Record<string, React.ReactNode> = {
        role: <Meta description={role} className="h-36 overflow-hidden text-ellipsis" />,
        technical: <Meta description={technical} className="h-36 overflow-hidden text-ellipsis" />,
        title: <Meta title={title} description={description} className="h-36 overflow-hidden text-ellipsis" />,
    };

    return (
        <Card
            hoverable
            title={
                <img
                    alt="image not found"
                    src={linkImage}
                    className="object-cover h-44 "
                    onClick={handleActionLinkGithub}
                />
            }
            // cover={<Image alt="image not found" src={linkImage} className="object-cover h-44" />}
            actions={[
                <LinkOutlined key="LinkOutlined" onClick={handleActionLinkOnline} />,
                <GithubOutlined key="edit" onClick={handleActionLinkGithub} />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
            className="hover:scale-105 transition"
            //
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
            activeTabKey={activeTabKey2}
            onTabChange={onTab2Change}
            tabProps={{
                size: 'small',
            }}
        >
            {contentListNoTitle[activeTabKey2]}
        </Card>
    );
};

export default CardProject;
