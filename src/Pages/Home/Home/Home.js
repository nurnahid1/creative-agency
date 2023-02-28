import React from 'react';
import About from '../../About/About';
import Blog from '../../Blog/Blog';
import Contact from '../../Contact/Contact';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter';
import PricingTable from '../PricingTable/PricingTable';
import AllProjects from '../Projects/AllProjects/AllProjects';
import Projects from '../Projects/Projects';



const Home = () => {
    return (
        <div>
            <div className='bgImg bgImg2'>
                    <div>
                        <Banner></Banner>
                        <About></About>
                        <Services></Services>
                        <Projects></Projects>
                    </div>
            </div>
            <AllProjects></AllProjects>
            <div className='newsBg'>
                <NewsLetter></NewsLetter>
            </div>
            <div>
                <PricingTable></PricingTable>
                <Blog></Blog>
                <Contact></Contact>
            </div>
           
        </div>
    );
};

export default Home;