import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, description, image, price, icon } = service
    return (
        <div data-aos="fade-up"  data-aos-duration="1500" className='my-10 md:my-16'>
           <div 
           style={{ 
            backgroundImage: `url("https://i.ibb.co/3RDn7yL/newsbg.png")` 
          }}
           className='p-5 shadow-xl rounded-xl text-center bg-[#6e47eee8]'>
                <img className='w-24 mx-auto' src={icon} alt="icon" />
                <h2 className='text-2xl font-source font-bold py-3 text-white'>{name}</h2>
                <p className='pb-6 text-white text-md'>{description}</p>
     

            <Link to={`/services/${_id}`} className='px-6 py-2 rounded-full bg-[#5E37DA] text-white font-poppins text-md hover:bg-[#1F247A] transition-all duration-500 '>Book Now </Link>
           </div>
        </div>
    );
};

export default Service;