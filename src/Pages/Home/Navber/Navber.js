import React from 'react';
import './Navber.css'
import { FaArtstation } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <FaArtstation className='w-12 h-12  text-[#1F2471]'></FaArtstation>
                <div>
                    <ul className='flex justify-center items-center'>
                        <li><Link className='mr-8 font-Poppins font-bold text-[#1F2471] ' to={'/'}> Home</Link></li>
                        <li><Link className='mr-8 font-Poppins font-bold text-[#1F2471] ' to={'/aboutus'}> About Us</Link></li>
                        <li><Link className='mr-8 font-Poppins font-bold text-[#1F2471] ' to={'/service'}> Services</Link></li>
                        <li><Link className='mr-8 font-Poppins font-bold text-[#1F2471] ' to={'/pricing'}> Pricing</Link></li>
                        <li><Link className='mr-8 font-Poppins font-bold text-[#1F2471] ' to={'/faq'}> FAQ</Link></li>
                        <li><Link className='mr-8  font-Poppins font-bold text-[#1F2471] ' to={'/contact'}> Contact</Link></li>

                        <Link className='button'>Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;