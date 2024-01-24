import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Drawer, Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import config from '../../config';
import Button from '../Button';

const Header = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('header');

    const [language, setLanguage] = useState<string>('English');
    const [scroll, setScroll] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const onCloseDrawer = () => {
        setOpenDrawer(false);
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
                    ? 'bg-white shadow fixed ease-in w-full left-0 px-8 md:px-10 lg:px-20 xl:px-32'
                    : 'bg-transparent '
            } 
                 py-4 flex justify-between items-center z-50 px-8 md:px-10 lg:px-20 xl:px-32`}
        >
            <Link to={config.Routes.home} className="text-xl font-bold hover:!text-primary-700 transition">
                Lê Văn Anh Đức
            </Link>
            <div className="flex gap-5">
                <nav className="lg:flex items-start gap-4 hidden !shadow-none">
                    <NavLink to={config.Routes.contact}>
                        {({ isActive }) => (
                            <Button
                                className={`${
                                    isActive
                                        ? '!text-primary-800 !border-0 !border-b-2 border-primary-800 rounded-none'
                                        : 'hover-button !border-0 hover:!text-primary-800 !text-black '
                                } uppercase !shadow-transparent !font-black`}
                            >
                                {t('contact')}
                            </Button>
                        )}
                    </NavLink>

                    <NavLink to={config.Routes.skills}>
                        {({ isActive }) => (
                            <Button
                                className={`${
                                    isActive
                                        ? '!text-primary-800 !border-0 !border-b-2 border-primary-800 rounded-none'
                                        : 'hover-button !border-0 hover:!text-primary-800 !text-black '
                                } uppercase !shadow-transparent !font-black`}
                            >
                                {t('skills')}
                            </Button>
                        )}
                    </NavLink>
                    <NavLink to={config.Routes.project}>
                        <Button className="uppercase bg-primary-700 hover:bg-primary-800 !font-black">
                            {t('project')}
                        </Button>
                    </NavLink>
                </nav>
                <div className="flex place-items-center">
                    <Select
                        style={{ width: 100 }}
                        options={[
                            { value: 'en', label: 'English' },
                            { value: 'vi', label: 'Việt Nam' },
                        ]}
                        size={'large'}
                        value={language}
                        onChange={handleGetLanguage}
                    />
                </div>

                <div className="flex lg:hidden text-2xl opacity-80 font-black" onClick={showDrawer}>
                    <MenuOutlined />
                </div>
                <Drawer title="Navigate" onClose={onCloseDrawer} open={openDrawer} width={'100%'}>
                    <div className="w-full py-3 px-10 flex flex-col lg:hidden gap-3">
                        <NavLink to={config.Routes.contact}>
                            {({ isActive }) => (
                                <Button
                                    className={`${
                                        isActive
                                            ? '!text-primary-800 border-0 border-b-2 border-primary-800 rounded-none'
                                            : 'hover-button border-0 hover:!text-primary-800 !text-black'
                                    } flex items-center justify-center w-full uppercase text-xl !font-bold`}
                                >
                                    {t('contact')}
                                </Button>
                            )}
                        </NavLink>

                        <NavLink to={config.Routes.skills}>
                            {({ isActive }) => (
                                <Button
                                    className={`${
                                        isActive
                                            ? '!text-primary-800 border-0 border-b-2 border-primary-800 rounded-none'
                                            : 'hover-button border-0 hover:!text-primary-800 !text-black'
                                    } flex items-center justify-center w-full uppercase text-xl !font-bold`}
                                >
                                    {t('skills')}
                                </Button>
                            )}
                        </NavLink>
                        <NavLink to={config.Routes.project}>
                            {({ isActive }) => (
                                <Button
                                    className={`${
                                        isActive
                                            ? '!text-primary-800 border-0 border-b-2 border-primary-800 rounded-none'
                                            : 'hover-button border-0 hover:!text-primary-800 !text-black'
                                    } flex items-center justify-center w-full  uppercase text-xl !font-bold`}
                                >
                                    {t('project')}
                                </Button>
                            )}
                        </NavLink>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Header;
