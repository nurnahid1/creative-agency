import React, { useState } from 'react';
import './Navber.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Navber = () => {
    const [open, setOpen] = useState(false);
    const [user]= useAuthState(auth)
   
    const handleSignout = ()=>{
        signOut(auth);
      }
   
    return (
        <div>
            {/* Desktop version */}
            <div className='md:flex justify-between items-center hidden  '>
            
                <div className='w-32'>
                    <img className='' src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex justify-center items-center'>
                        <li><Link className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' to={'/'}> Home</Link></li>
                        <li><Link className='mr-8 font-Poppins text-md text-[#060213] font-semibold  ' to={'/aboutus'}> About Us</Link></li>
                        <li><Link className='mr-8 font-Poppins text-md text-[#060213] font-semibold   ' to={'/service'}> Services</Link></li>
                        <li><Link to={'/all'} className='mr-8 font-Poppins text-md text-[#060213] font-semibold  ' > Projects</Link></li>
                        <li><Link className='mr-8  font-Poppins text-md text-[#060213] font-semibold  ' to={'/contact'}> Contact</Link></li>

                        {
                        user && 
                        <li><Link className='mr-8  font-Poppins text-md text-[#060213] font-semibold  ' to={'/orders'}> Orders</Link></li>
                        }
                        {
                        user ? <img className='mr-3 w-10 rounded-full shadow-sm' src={user.photoURL} alt="" /> : ' '
                        }

                        {user ? <Link onClick={handleSignout} className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 mr-6'>Sign Out</Link> 
                        :
                        <Link to={'/login'}  className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 mr-6'>Login</Link>
                        }
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
                        <li><Link className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' to={'/'}> Home</Link></li>
                        <li><Link className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' to={'/aboutus'}> About Us</Link></li>
                        <li><Link className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' to={'/service'}> Services</Link></li>
                        <li><a href='#pricing1' className='mr-8 font-Poppins text-lg  text-[#060213] font-semibold ' > Pricing</a></li>
                        <li><Link className='mr-8  font-Poppins text-lg  text-[#060213] font-semibold ' to={'/contact'}> Contact</Link></li>

                        {
                        user && 
                        <li><Link className='mr-8  font-Poppins text-md text-[#060213] font-semibold  ' to={'/orders'}> Orders</Link></li>
                        }
                        {
                        user ? <img className='mr-3 w-10 rounded-full shadow-sm' src={user.photoURL} alt="" /> : ' '
                        }

                        {user ? <Link onClick={handleSignout} className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 mr-6'>Sign Out</Link> 
                        :
                        <Link to={'/login'}  className='px-7 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 mr-6'>Login</Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;