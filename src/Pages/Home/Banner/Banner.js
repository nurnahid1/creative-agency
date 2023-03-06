import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.png'
import banner2 from '../../../images/banner2.png'

import './Banner.css'

// slider image

// import img2 from '../../../images/logos/google.png'
// import img3 from '../../../images/logos/design.png'
// import img4 from '../../../images/logos/club.png'
// import img5 from '../../../images/logos/netflix.png'
// import img6 from '../../../images/logos/slack.png'
// import img7 from '../../../images/logos/uber.png'


const Banner = () => {
    return (
        <div className='relative '>
            
            <div className='flex-col flex lg:flex-row-reverse md:mt-8 mt-8 md:gap-10 justify-center items-center'>

                <div data-aos="fade-up" data-aos-duration="2000" className='mb-14 md:mb-0'>
                    <img className='bannerImg1 relative  max-w-xs md:max-w-lg ' src={banner} alt="banner" />
                    <img className='bannerImg2 max-w-xs md:max-w-lg absolute top-4'  src={banner2} alt="banner" />
                </div>
                <div data-aos="fade-right" data-aos-duration="2000" className=''>
                    <h4 className='text-xl font-poppins font-thin my-4 px-2 py-1 mt-2 md:pt-0 text-white inline-block bg-[black] rounded-sm'>WE CREATE IDEAS</h4>
                    <h2 className='md:text-6xl font-bold text-3xl font-poppins '>Build Stunning <span className='text-[#896EFF] font-bold'>Website</span> With creative Agency</h2>
                    <p className='py-6 md:pb-8 font-poppins text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos blanditiis nihil doloremque quos adipisci officiis dicta dolorum vel nesciunt!</p>

                    
                    <Link className='px-8 py-3 rounded-full  text-white font-poppins text-lg bg-[#5E37DA] hover:bg-[#4c28c4]  transition-all duration-500'>Book Now</Link>
                </div>
            </div>

            
          
           
            
        </div>
    );
};

export default Banner;