import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';

import Projects from '../Projects/Projects';



const Home = () => {
    return (
        <div>
            <div className='bgImg bgImg2'>
                <div  className='mx-8 md:mx-24 lg:mx-28 mt-8'>
                    <Banner></Banner>
                    <About></About>
                    <Projects></Projects>
                    
                    
                </div>
            </div>

        </div>
    );
};

export default Home;