import React from 'react';
import logo from '../../../images/logos/logo.png'
import { CiMail } from "react-icons/ci";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-16 md:mt-32  mx-8 md:mx-24 lg:mx-28 pt-16'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <img className='w-36 mb-6 md:mb-0' src={logo} alt="" />
                </div>
                <div>
                    <div className='flex justify-center items-center gap-5'>
                        <CiMail className='md:w-12 w-10 md:h-12 h-10 text-white'></CiMail>
                        <div>
                            <h2 className='font-poppins text-white text-sm md:text-lg'>+42 247-754-3210</h2>
                            <h2 className='font-poppins text-white text-sm md:text-lg'>info@example.com</h2>
                        </div>
                    </div>

                   <div className='flex justify-center items-center gap-5'>
                        <FaMapMarkedAlt className='md:w-12 w-10 md:h-12 h-10 text-white'></FaMapMarkedAlt>
                         <h2 className='font-poppins text-white text-sm md:text-lg'>Dhaka Bangladesh</h2>
                   </div>
                    
                    
                </div>
            </div>
            {/* Horizontal Line */}
            <div className='h-[1px] w-full bg-white rounded-full mx-auto mt-2 my-4 md:my-6'></div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-28'>
                <div>
                    <h2 className='font-poppins text-white text-lg md:text-xl mb-3  border-w-1/2'>About us</h2>
                    <p className='text-white text-sm md:text-md font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, optio.</p>
                    
                    <div className='flex justify-start items-center my-3'>
                        <BsFacebook  className='hover:text-[#1F2471] mr-3 w-6 h-6 text-white'></BsFacebook>
                        <BsTwitter   className='hover:text-[#1F2471] mr-3 w-6 h-6 text-white'></BsTwitter>
                        <BsInstagram className='hover:text-[#1F2471] w-6 h-6 text-white'></BsInstagram>
                    </div>
                </div>
                <div>
                    <h2 className='font-poppins text-white text-lg md:text-xl mb-3 '>Our links</h2>
                    <ul>
                        <li><Link className='text-white font-poppins text-sm md:text-md pb-1 hover:underline
                        ' to={'/'}>Home</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/about'}>About Us</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/service'}>Service</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/Project'}>Projects</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/blog'}>Blog</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-poppins text-white text-lg md:text-xl mb-3 '>Our Services</h2>
                    <ul>
                        <li><Link className='text-white font-poppins text-sm md:text-md pb-1 hover:underline
                        ' to={'/'}>Web Design</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/about'}>Graphic Design </Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/service'}>Web Development</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-poppins text-white text-lg md:text-xl mb-3 '>Privacy & Others</h2>
                    <ul>
                        <li><Link className='text-white font-poppins text-sm md:text-md pb-1 hover:underline
                        ' to={'/'}>FAQ</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/about'}>Privcay Policy </Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/service'}>Terms & Conditions</Link></li>
                        <li><Link className='text-white font-poppins text-sm md:text-md py-1 hover:underline
                        ' to={'/service'}>Support</Link></li>
                    </ul>
                </div>
            </div>

            <p className='text-center text-xs md:text-sm text-white font-poppins mt-6 pb-3'>Copyright © 2023 Dev Nahid. All rights reserved.</p>
        </div>
    );
};

export default Footer;