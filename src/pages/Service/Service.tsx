import { useTranslation } from 'react-i18next';
import CardService from '../../components/CardService/CardService';
import {
    ScissorOutlined,
    DesktopOutlined,
    FileDoneOutlined,
    LaptopOutlined,
    CompassOutlined,
    SolutionOutlined,
    ShakeOutlined,
    MobileOutlined,
} from '@ant-design/icons';

const Service = () => {
    const { t } = useTranslation('service');
    return (
        <main className="my-10">
            <div className="text-center">
                <p className="text-primary-100 font-bold text-xl uppercase">{t('myService')}</p>
                <h1 className="mb-20">{t('desciptionService')}</h1>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                <CardService title={t('webDesign')} icon={<DesktopOutlined />} />
                <CardService title={t('webApplication')} icon={<FileDoneOutlined />} />
                <CardService title={t('webDevelopment')} icon={<LaptopOutlined />} />
                <CardService title="SEO" icon={<CompassOutlined />} />
                <CardService title={t('graphicDesign')} icon={<SolutionOutlined />} />
                <CardService title={t('mobileDesign')} icon={<ShakeOutlined />} />
                <CardService title={t('mobileApplication')} icon={<MobileOutlined />} />
                <CardService title={t('mobileDevelopment')} icon={<ScissorOutlined />} />
            </div>
        </main>
    );
};

export default Service;
