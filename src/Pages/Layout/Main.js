import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navber from '../Home/Navber/Navber';

const Main = () => {
    return (
       <div>
            <div className='mx-8 md:mx-24 lg:mx-28 mt-8'>
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
          
           
            <div className='footerBg'>
                <Footer></Footer>
            </div>
       </div>
    );
};

export default Main;