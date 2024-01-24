import { Link, NavLink } from 'react-router-dom';
import config from '../../config';
import { useEffect, useState } from 'react';
import { Button, Popover, Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('header');

    const [language, setLanguage] = useState<string>('English');
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setScroll(true) : setScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        };
    }, []);

    const handleGetLanguage = (value: string) => {
        setLanguage(value);
        i18n.changeLanguage(value);
    };

    return (
        <div
            className={`${
                scroll
                    ? 'bg-white  shadow fixed ease-in w-full left-0 px-8 md:px-10 lg:px-20 xl:px-32'
                    : 'bg-transparent '
            } 
                 py-4 flex justify-between items-center z-50 px-8 md:px-10 lg:px-20 xl:px-32`}
        >
            <Link to={config.Routes.home} className="text-xl font-bold hover:!text-primary-100 transition">
                Lê Văn Anh Đức
            </Link>
            <div className="flex gap-5">
                <nav className="lg:flex items-start gap-4 hidden !shadow-none">
                    <NavLink to={config.Routes.contact}>
                        {({ isActive }) => (
                            <Button
                                type="link"
                                className={`${
                                    isActive
                                        ? '!text-primary-100 !border-0 !border-b-2 border-primary-100 rounded-none'
                                        : 'hover-button !border-0 hover:!text-primary-100 hover:rounded-none !text-black '
                                } flex items-center p-5 uppercase text-sm font-bold !shadow-transparent transition`}
                            >
                                {t('contact')}
                            </Button>
                        )}
                    </NavLink>

                    <NavLink to={config.Routes.skills}>
                        {({ isActive }) => (
                            <Button
                                type="link"
                                className={`${
                                    isActive
                                        ? '!text-primary-100 !border-0 !border-b-2 border-primary-100 rounded-none'
                                        : 'hover-button !border-0 hover:!text-primary-100 hover:rounded-none !text-black '
                                } flex items-center p-5 uppercase text-sm font-bold !shadow-transparent transition`}
                            >
                                {t('skills')}
                            </Button>
                        )}
                    </NavLink>
                    <NavLink to={config.Routes.project}>
                        <Button className="uppercase bg-primary-100 !border-0 text-sm font-bold hover:!text-black hover:opacity-90 !shadow-transparent !text-white transition flex items-center p-5">
                            {t('project')}
                        </Button>
                    </NavLink>
                </nav>

                <Popover
                    content={
                        <div className="w-screen px-14 py-3 z-50 block lg:hidden">
                            <NavLink to={config.Routes.contact}>
                                {({ isActive }) => (
                                    <Button
                                        type="link"
                                        className={`${
                                            isActive
                                                ? '!text-primary-100 !border-0 !border-b-2 border-primary-100 rounded-none'
                                                : 'hover-button !border-0 hover:!text-primary-100 hover:rounded-none !text-black '
                                        } flex items-center p-5 uppercase text-sm font-bold !shadow-transparent transition`}
                                    >
                                        {t('contact')}
                                    </Button>
                                )}
                            </NavLink>

                            <NavLink to={config.Routes.skills}>
                                {({ isActive }) => (
                                    <Button
                                        type="link"
                                        className={`${
                                            isActive
                                                ? '!text-primary-100 !border-0 !border-b-2 border-primary-100 rounded-none'
                                                : 'hover-button !border-0 hover:!text-primary-100 hover:rounded-none !text-black '
                                        } flex items-center p-5 uppercase text-sm font-bold !shadow-transparent transition`}
                                    >
                                        {t('skills')}
                                    </Button>
                                )}
                            </NavLink>
                            <NavLink to={config.Routes.project}>
                                {({ isActive }) => (
                                    <Button
                                        type="link"
                                        className={`${
                                            isActive
                                                ? '!text-primary-100 !border-0 !border-b-2 border-primary-100 rounded-none'
                                                : 'hover-button !border-0 hover:!text-primary-100 hover:rounded-none !text-black '
                                        } flex items-center p-5 uppercase text-sm font-bold !shadow-transparent transition`}
                                    >
                                        {t('project')}
                                    </Button>
                                )}
                            </NavLink>
                        </div>
                    }
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                    arrow={false}
                >
                    <div className="block lg:hidden text-2xl opacity-80 font-medium">
                        {open ? 'X' : <MenuOutlined />}
                    </div>
                </Popover>

                <Select
                    style={{ width: 120 }}
                    bordered={false}
                    suffixIcon={null}
                    options={[
                        { value: 'en', label: 'English' },
                        { value: 'vi', label: 'Việt Nam' },
                    ]}
                    size={'large'}
                    value={language}
                    onChange={handleGetLanguage}
                    className="m-auto !text-xl"
                />
            </div>
        </div>
    );
};

export default Header;
