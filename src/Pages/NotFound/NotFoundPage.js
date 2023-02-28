import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div>
            <section className="page_404">
	            <div className="container">
		            <div className="row">	
		                <div className="col-sm-12 ">
		                    <div className="col-sm-10 col-sm-offset-1  text-center">
		                        <div className="bgStyle">
			                        <h1 className="text-center text-7xl font-bold text-[#947DF0]">404</h1>
                                 </div>
                              <div className="contant_box_404">
                                <h3 className="text-xl md:text-3xl my-3 font-poppins">Look's like you're lost</h3>
                                <p className='font-poppins text-lg mb-6'>the page you are looking for not avaible!</p>
                                <Link to={'/'} className=" px-3 py-3 rounded-full bg-[#9C86F9] hover:bg-[#6A48FF] font-poppins text-lg text-white">Go Back Home</Link>
                            </div>
                  </div>
		        </div>
		     </div>
	       </div>
        </section>
     </div>
    );
};

export default NotFoundPage;