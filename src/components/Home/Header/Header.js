import React from 'react';
import AdminDashBord from '../../Admin/AdminDashBord/AdminDashBord';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Footer from '../footer copy';
import { FooterContainer } from '../Footer/Footer';

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
            {/* <Services></Services> */}
          
           <Services></Services>
           <AdminDashBord></AdminDashBord>
           <h2>review</h2>
        
           <Review></Review>
       
           <FooterContainer></FooterContainer>
         
        </div>
    );
};

export default Header;