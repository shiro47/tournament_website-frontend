import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './Footer';
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className="d-flex flex-column">
            <Header />
            <div className='background-image flex-grow-1' />
            <div className='background-global'>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
