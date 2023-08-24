import React, { ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className="vh-100">
            <Header />
            <div className='background-image vh-100'>
                <div className='background-global vh-100'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
