import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ReactNode } from 'react';

interface DefaultLayoutProps {
    children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div className="bg-secondary-100 px-8 md:px-10 lg:px-20 xl:px-32">
            <Header />
            <div className="min-h-screen py-10">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
