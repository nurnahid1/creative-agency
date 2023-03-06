import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardLayout.css'

const DashbordLayout = () => {
    return (
        <div>
           
           
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div> 

                <div className="drawer-side  rounded-md  mt-1 md:mt-5 ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-2 md:w-60 w-44 text-base-content bg-[#957DFF]">
                    
                    <li className='rounded-md  font-poppins text-white my-1'><NavLink className={({isActive}) => isActive ? 'active' : 'undefined'} to={'/dashboard'}>Dashboard</NavLink></li>
                   
                    <li className='rounded-md font-poppins text-white my-1'><NavLink to={'/dashboard/orders'}>Orders</NavLink></li>
                    <li className='rounded-md font-poppins text-white my-1'><NavLink to={'/dashboard/profile'}>Profile</NavLink></li>
                   
                   
                    
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;