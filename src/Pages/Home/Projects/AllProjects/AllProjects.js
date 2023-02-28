import React from 'react';
import { Outlet } from 'react-router-dom';
import GraphicDesign from '../graphicDesign/GraphicDesign';
import WebDesign from '../WebDesign/WebDesign';
import WebDevelopment from '../WebDevelopment/WebDevelopment';



const AllProjects = () => {
    return (
       <div>
        <Outlet></Outlet>
            <WebDesign></WebDesign>
        <div className='md:my-6'>
            <GraphicDesign></GraphicDesign>
        </div>
            <WebDevelopment></WebDevelopment>
       </div>
    );
};

export default AllProjects;