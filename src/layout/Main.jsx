import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Carousel from '../pages/Carousel/Carousel';
import Services from '../pages/Services/Services';
import WhyChooseUs from '../pages/WhyChooseUs/WhyChooseUs';

const Main = () => {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <Outlet/>
            <Services/>
            <WhyChooseUs/>
            <Footer/>
        </>
    );
};

export default Main;