import React from 'react';
import { Link } from 'react-router-dom';
import './PricingTable.css'

const PricingTable = () => {
    return (
        <div id='pricing1' className='mt-8 md:mt-16'>
            <h2 className='text-xl font-bold text-[#AD9AFF] text-center'>PRICING</h2>
            <h1 className='md:text-5xl font-bold text-3xl font-source text-[#1F2471] py-4 text-center'>CHOOSE ONE PLAN</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-16'>
                {/* Card 1 */}
                <div className='flex flex-col justify-center items-center cardBg rounded-md shadow-xl border py-3'> 
                    <h2 className='text-center text-4xl font-source font-bold  hover:text-white py-4'>Basic Plan</h2>
                    <h2 className='text-center text-2xl font-poppins pt-3'> <span className='font-poppins text-3xl font-bold '>$99 </span><span>/Month</span></h2>
                    <p  className='text-center px-4 font-poppins text-md'>Basic plan for personal business </p>
                    <p  className='text-center text-lg font-poppins py-1 pt-6'>Graphic Design</p>
                    <p  className='text-center text-lg font-poppins py-1'>Web Design</p>
                    <p  className='text-center text-lg font-poppins py-1'>UI/UX</p>
                    <p  className='text-center text-lg font-poppins py-1'>HTML/CSS</p>
                    <p  className='text-center text-lg font-poppins py-1'>SEO Marketing</p>
                    <p  className='text-center text-lg font-poppins py-1'>Business Analysis</p>
                    
                    <Link  className='px-8 py-3 rounded-full bg-[#5E37DA] text-white font-poppins text-md hover:bg-[white] hover:text-black transition-all duration-500 mt-6'>Start Now  </Link>
                </div>

                {/* card 2 */}
                <div className='flex flex-col justify-center items-center text-white activeCard rounded-md shadow-xl border py-3'> 
                    <h2 className='text-center text-4xl font-source font-bold  hover:text-white py-4'>Standard Plan</h2>
                    <h2 className='text-center text-2xl font-poppins pt-3'> <span className='font-poppins text-3xl font-bold '>$199 </span><span>/Month</span></h2>
                    <p  className='text-center px-4 font-poppins text-md'>Standard plan for new business </p>
                    <p  className='text-center text-lg font-poppins py-1 pt-6'>Graphic Design</p>
                    <p  className='text-center text-lg font-poppins py-1'>Web Design</p>
                    <p  className='text-center text-lg font-poppins py-1'>UI/UX</p>
                    <p  className='text-center text-lg font-poppins py-1'>HTML/CSS</p>
                    <p  className='text-center text-lg font-poppins py-1'>SEO Marketing</p>
                    <p  className='text-center text-lg font-poppins py-1'>Video Marketing</p>
                    <p  className='text-center text-lg font-poppins py-1'>Business Analysis</p>
                    <Link  className='px-8 py-3 rounded-full bg-[#5E37DA] text-white font-poppins text-md hover:bg-[white] hover:text-black transition-all duration-500 mt-6'>Start Now  </Link>
                </div>

                {/* card3 */}
                <div className='flex flex-col justify-center items-center cardBg rounded-md shadow-xl border py-3'> 
                    <h2 className='text-center text-4xl font-source font-bold  hover:text-white py-4'>Premium Plan</h2>
                    <h2 className='text-center text-2xl font-poppins pt-3'> <span className='font-poppins text-3xl font-bold '>$299 </span><span>/Month</span></h2>
                    <p  className='text-center px-4 font-poppins text-md'>Premium plan for Mid-startups business </p>
                    <p  className='text-center text-lg font-poppins py-1 pt-6'>Graphic Design</p>
                    <p  className='text-center text-lg font-poppins py-1'>Web Design</p>
                    <p  className='text-center text-lg font-poppins py-1'>UI/UX</p>
                    <p  className='text-center text-lg font-poppins py-1'>HTML/CSS</p>
                    <p  className='text-center text-lg font-poppins py-1'>SEO Marketing</p>
                    <p  className='text-center text-lg font-poppins py-1'>Video Marketing</p>
                    <p  className='text-center text-lg font-poppins py-1'>Brand Identity Design</p>
                    <Link  className='px-8 py-3 rounded-full bg-[#5E37DA] text-white font-poppins text-md hover:bg-[white] hover:text-black transition-all duration-500 mt-6'>Start Now  </Link>
                </div>
            </div>
        </div>
    );
};

export default PricingTable;