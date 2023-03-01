import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        const url = 'http://localhost:5000/services'
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='md:text-5xl font-bold text-3xl font-source text-[#1F2471] py-4 text-center mt-10 md:mt-24'>Services We Provide</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-10 gap-y-6'> 
            {
            services.map(service => <Service
            key={service._id}
            service={service}
            ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;