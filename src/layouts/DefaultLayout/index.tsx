import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ReactNode } from 'react';

interface DefaultLayoutProps {
    children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Header />
            <div className="min-h-screen overflow-hidden">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
