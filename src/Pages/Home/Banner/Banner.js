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
        <div className='relative md:min-h-screen '>
            
            <div className='flex-col flex lg:flex-row-reverse md:mt-8 mt-8 md:gap-10 justify-center items-center'>

                <div className=''>
                    <img className='bannerImg1 relative max-w-xs md:max-w-lg ' src={banner} alt="banner" />
                    <img className='bannerImg2 max-w-xs md:max-w-lg absolute top-4'  src={banner2} alt="banner" />
                </div>
                <div className='md:mt-20'>
                    <h4 className='text-xl font-source py-4 pt-10 md:pt-0'>WE CREATE IDEAS</h4>
                    <h2 className='md:text-5xl font-bold text-3xl font-source '>Build Stunning <span className='text-[#896EFF]'>Website</span> With creative Agency</h2>
                    <p className='py-6 md:pb-8 font-poppins text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos blanditiis nihil doloremque quos adipisci officiis dicta dolorum vel nesciunt!</p>

                    <Link className='button'>Book Now </Link>
                </div>
            </div>

            
          
           
            
        </div>
    );
};

export default Banner;