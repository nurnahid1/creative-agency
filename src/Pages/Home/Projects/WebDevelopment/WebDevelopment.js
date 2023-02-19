import React from 'react';
import design2 from '../../../../images/project2.png'
import design3 from '../../../../images/project3.png'

const WebDevelopment = () => {
    return (
        <div className=' grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-8 md:mx-24 lg:mx-28 '>
             <img className='w-full rounded-md' src={design2} alt="" />
             <img className='w-full rounded-md' src={design3} alt="" />
        </div>
    );
};

export default WebDevelopment;