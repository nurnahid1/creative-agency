import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, description, image, price, icon } = service
    return (
        <div className='my-10 md:my-16'>
           <div className='p-5 shadow-xl rounded-md text-center'>
                <img className='w-16 mx-auto' src={icon} alt="icon" />
                <h2 className='text-2xl font-source font-bold py-3 text-[#1F2471]'>{name}</h2>
                <p className='pb-6'>{description}</p>
                <Link className='button font-source hover:border hover:border-black text-white hover:text-[#896EFF] '>Book Now </Link>
           </div>
        </div>
    );
};

export default Service;