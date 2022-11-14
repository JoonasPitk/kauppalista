import {FC, ReactNode} from 'react';
import {CustomNavbar} from './Navbar';

const Layout: FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <CustomNavbar/>

            <main>{children}</main>
        </>    
    );
};

export default Layout;
