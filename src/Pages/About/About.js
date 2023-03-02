import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import about from '../../images/img4.png'


const About = () => {
    return (
        <div className='mb-8 md:mb-12 mt-16 md:mt-24'>
          
            <div className='flex-col flex lg:flex-row  md:gap-20 justify-center items-center '>
                <div>
                    <img className='md:max-w-md max-w-xs' src={about} alt="" />
                </div>
                <div>
                    <h2 className='text-xl  font-thin font-poppins text-[#AD9AFF] '>About Us</h2>
                    <h1 className='md:text-4xl font-bold text-3xl font-poppins text-[#1F2471] py-4 '>How We Can Help You grow Your Business</h1>
                    <p className='pb-4 py-2 font-poppins text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque quo iure esse vel porro, at, quas provident aliquam distinctio ratione quam hic molestias? Culpa eum ipsam tempore velit odit ullam natus ut, nisi dicta inventore eius quis error itaque iste, aliquam maxime, quidem amet excepturi molestias ipsa nemo perspiciatis?</p>
                    <h1 className='text-[#5E37DA] text-md underline font-bold font-poppins pb-8'>CEO Brainstrom</h1>
                    
                    <Link to={'/login'} className='px-8 py-2 rounded-full bg-[#896EFF] text-white font-poppins text-md hover:bg-[#5E37DA] transition-all duration-500 '>Book Now</Link>
                </div>
                
                
            </div>
        </div>
    );
};

export default About;