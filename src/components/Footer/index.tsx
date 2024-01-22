import { FacebookFilled, InstagramFilled, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation('footer');

    return (
        <footer className="bg-gray-200/80 px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="py-10 flex flex-col gap-8">
                <div className="w-full md:w-fit flex items-start justify-center tracking-widest uppercase text-4xl font-serif font-semibold hover:text-primary-700 transition">
                    Lê Văn Anh Đức
                </div>
                <div className="flex justify-between items-center gap-8 py-8">
                    <div>
                        &copy; {currentYear} LEVANANHDUC. {t('copyright')}.
                    </div>
                    <div className="flex justify-center items-center gap-6 text-2xl">
                        <motion.a
                            href="https://www.instagram.com/hi.iam.lvad/"
                            target="_blank"
                            whileHover={{
                                scale: 1.05,
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-primary-700 text-3xl"
                        >
                            <InstagramFilled />
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/qb.levananhduc"
                            target="_blank"
                            whileHover={{
                                scale: 1.05,
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-primary-700 text-3xl"
                        >
                            <FacebookFilled />
                        </motion.a>
                        <motion.a
                            href="https://github.com/LeVanAnhDuc"
                            target="_blank"
                            whileHover={{
                                scale: 1.05,
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-primary-700 text-3xl"
                        >
                            <GithubOutlined />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
