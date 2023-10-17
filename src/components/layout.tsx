import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './Footer';
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className="vh-100 d-flex flex-column">
            <Header />
            <div className='background-image flex-grow-1'>
                <div className='background-global vh-100'>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
