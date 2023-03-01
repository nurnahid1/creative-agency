import React from 'react';
import design from '../../../../images/project4.png'
import design2 from '../../../../images/graphic1.jpg'
import design3 from '../../../../images/graphic2.jpg'
import design4 from '../../../../images/graphic3.jpg'

const GraphicDesign = () => {
    return (
        <div  className=' grid gird-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mx-8 md:mx-24 lg:mx-28 '>
          
                <img className='w-full rounded-md' src={design} alt="" />
                <img className='w-full rounded-md' src={design2} alt="" />
                <img className='w-full rounded-md' src={design3} alt="" />
                <img className='w-full rounded-md' src={design4} alt="" />
            
          
        </div>
    );
};

export default GraphicDesign;