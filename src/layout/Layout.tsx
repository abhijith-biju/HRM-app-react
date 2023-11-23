import React, { ReactNode } from 'react';
import { Header, Footer } from '../components';

interface ILayout {
    children?: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
