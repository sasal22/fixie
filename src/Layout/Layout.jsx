import React from 'react';
import Footer from './Footer/Footer';
import Header from './header/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header/>
                <main>
                <Outlet/> 
                </main>
            <Footer/>     
        </>
    );
};

export default Layout;