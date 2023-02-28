import React, { useState } from 'react';
import './Navber.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";


const Navber = () => {
    const [open, setOpen] = useState(false);
   
    return (
        <div>
            {/* Desktop version */}
            <div className='md:flex justify-between items-center hidden'>
                <div className='w-32'>
                    <img className='' src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex justify-center items-center'>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] ' to={'/'}> Home</Link></li>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] ' to={'/aboutus'}> About Us</Link></li>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] ' to={'/services'}> Services</Link></li>
                        <li><Link to={'/all'} className='mr-8 font-Poppins  text-[#1F2471] ' > Projects</Link></li>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] ' to={'/faq'}> FAQ</Link></li>
                        <li><Link className='mr-8  font-Poppins  text-[#1F2471] ' to={'/contact'}> Contact</Link></li>

                        <Link to={'/login'} className='button'>Login</Link>
                    </ul>
                </div>
            </div>
            {/* Mobile Version */}
            <div className='flex justify-between relative'>
                <div className='w-24 mt-2 md:hidden'>
                    <img className='' src={logo} alt="" />
                </div>
                <div>
                   <div onClick={()=> setOpen(!open)} className='md:hidden'>
                    {
                        open ? <MdClose ></MdClose> : <HiMenu></HiMenu>
                    }
                   </div>
                <ul className={`nav flex flex-col gap-5 justify-center items-center md:hidden md:pb-0 pb-6 absolute md:static md:z-auto z-50 right-0 w-2/3 py-5 md:py-0 md:w-auto rounded-md shadow-md  mt-8 md:mt-0 bg-white ${open ? 'top-30' : 'top-[-500px]'}`}>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] text-lg' to={'/'}> Home</Link></li>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] text-lg' to={'/aboutus'}> About Us</Link></li>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] text-lg' to={'/service'}> Services</Link></li>
                        <li><a href='#pricing1' className='mr-8 font-Poppins  text-[#1F2471] text-lg' > Pricing</a></li>
                        <li><Link className='mr-8 font-Poppins  text-[#1F2471] text-lg' to={'/faq'}> FAQ</Link></li>
                        <li><Link className='mr-8  font-Poppins  text-[#1F2471] text-lg' to={'/contact'}> Contact</Link></li>

                        <Link to={'/login'} className='button mr-6'>Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;