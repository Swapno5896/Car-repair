import React from 'react';
import AddService from '../../Admin/AddService/AddService';
// import AdminDashBord from '../../Admin/AdminDashBord/AdminDashBord';
import ChangeServiceState from '../../Admin/ChangeServiceState/ChangeServiceState';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import AboutUs from '../AboutUs/AboutUs';
// import BookingList from '../BookingList/BookingList';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Footer from '../footer copy';
import { FooterContainer } from '../Footer/Footer';
import GetPament from '../GetPament/GetPament';

import MainHeader from '../MainHeader/MainHeader';
import NavBar from '../NavBar/NavBar';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <MainHeader></MainHeader>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            {/* <BookingList></BookingList> */}
            <Review></Review>
            <AboutUs></AboutUs>
            <FooterContainer></FooterContainer>
         
        </div>
    );
};

export default Header;