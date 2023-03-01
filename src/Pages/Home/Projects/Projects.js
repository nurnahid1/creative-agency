import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div  className='mb-10 md:pt-16'>
            <div>
                <h2 className='text-xl font-bold text-[#AD9AFF] text-center '>Projects</h2>
                <div className='w-full'>
                    <h1 className='md:text-5xl font-bold text-3xl font-source text-[#1F2471] py-4 text-center mx-auto mb-8'>Check out Our Latest Portfolio</h1>
                </div>

                {/* Projects Routes Desktop*/}
                <div className=' w-full rounded-full bg-[#F3F0FF] md:block hidden'>
                    <ul className='flex justify-around items-center h-16'>
                        <li><Link className='font-poppins text-sm md:text-md  bg-[#5E37DA] px-3 py-2 rounded-full hover:transition-all hover:ease-in-out text-white' to={'/all'}>All Projects</Link></li>
                        <li><Link className='font-poppins text-sm md:text-md text-[#1F2471]  hover:bg-[#5E37DA] px-1 md:px-3 py-2 rounded-full hover:transition-all hover:ease-in-out hover:text-white' to={'/graphicdesign'}>Graphic Design</Link></li>
                        <li><Link className='font-poppins text-sm md:text-md text-[#1F2471]  hover:bg-[#5E37DA] px-1 md:px-3 py-2 rounded-full hover:transition-all hover:ease-in-out hover:text-white' to={'/webdesign'}>Web Design</Link></li>
                    <li><Link className='font-poppins md:text-md text-sm text-[#1F2471]  hover:bg-[#5E37DA] md:px-3 px-1 py-2 rounded-full hover:transition-all hover:ease-in-out hover:text-white' to={'/webdevelopment'}>Web Development</Link></li>
                    </ul>
                </div>

                {/* Projects Route Mobile */}
                <div className='w-full rounded-full bg-[#F3F0FF] md:hidden block'>
                    <ul className='flex justify-around items-center h-12'>
                        <li><Link className='font-poppins text-md font-bold bg-[#896EFF] px-3 py-2 rounded-full hover:transition-all hover:ease-in-out text-white' to={'/all'}>All Projects</Link></li>
                        <li><Link className='font-poppins text-sm md:text-md text-[#1F2471] font-bold hover:bg-[#896EFF] px-1 md:px-3 py-2 rounded-full hover:transition-all hover:ease-in-out hover:text-white' to={'/graphicdesign'}>Graphic Design</Link></li>
                    </ul>
                </div>
                <div className='w-full rounded-full bg-[#F3F0FF] md:hidden block mt-4'>
                    <ul className='flex justify-around items-center h-12'>
                    <li><Link className='font-poppins text-sm md:text-md text-[#1F2471] font-bold hover:bg-[#896EFF] px-1 md:px-3 py-2 rounded-full hover:transition-all hover:ease-in-out hover:text-white' to={'/webdesign'}>Web Design</Link></li>
                    <li><Link className='font-poppins md:text-md text-sm text-[#1F2471] font-bold hover:bg-[#896EFF] md:px-3 px-1 py-2 rounded-full hover:transition-all hover:ease-in-out hover:text-white' to={'/webdevelopment'}>Web Development</Link></li>
                    </ul>
                </div>

            </div>

            
        </div>
    );
};

export default Projects;