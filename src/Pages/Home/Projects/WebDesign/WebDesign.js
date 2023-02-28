import React from 'react';
import design from '../../../../images/project1.webp'
import design2 from '../../../../images/project2.png'
import design3 from '../../../../images/project3.png'
import design4 from '../../../../images/project5.jpg'

const WebDesign = () => {
    return (
        <div>
             <div className=' grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-8 md:mx-24 lg:mx-28 '>
                <img className='w-full rounded-md' src={design} alt="" />
                <img className='w-full rounded-md' src={design2} alt="" />
                <img className='w-full rounded-md' src={design3} alt="" />
                <img className='w-full rounded-md' src={design4} alt="" />
            </div>
        </div>
    );
};

export default WebDesign;