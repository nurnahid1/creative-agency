import React from 'react';
import GraphicDesign from '../graphicDesign/GraphicDesign';
import WebDesign from '../WebDesign';
import WebDevelopment from '../WebDevelopment/WebDevelopment';



const AllProjects = () => {
    return (
       <div className='mb-8 md:mb-16'>

        <div className=''>
                <WebDesign></WebDesign>
        </div>
        <div className='md:my-6'>
                 <GraphicDesign></GraphicDesign>
               
        </div>
        <div className=''>
               <WebDevelopment></WebDevelopment>
        </div>

       </div>
    );
};

export default AllProjects;