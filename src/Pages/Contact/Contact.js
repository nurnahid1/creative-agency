import React from 'react';
import { Link } from 'react-router-dom';
import contact from '../../images/contact.png'
import './Contact.css'

const Contact = () => {
    return (
        <div >
            <h2 className='text-xl md:text-5xl text-center font-poppins font-bold py-8 md:py-10 md:mb-10 text-[#1F2471] w-4/6 mx-auto'>We Love To Help Companies to Grow Their Businesses</h2>

            <div>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-28'>
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <img className='max-w-xs md:max-w-sm lg:max-w-lg' src={contact} alt="" />
                    </div>
                    <div  data-aos="fade-right" data-aos-duration="2000" className='w-full'>
                        <form className='flex flex-col justify-center items-center ' action="">
                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="text" name="name" id="" placeholder='Your name' required/>
                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="email" name="email" id="" placeholder='Email address' required/>
                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="text" name="number" id="" placeholder='Phone number' required/>

                            <div className='flex flex-col md:flex-row gap-5 w-full'>
                            <select className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2  font-poppins' name="service" id="service">
                                <option className='my-2 font-poppins' value="">Plese Choose Service</option>
                                <option className='my-2 font-poppins' value="graphicDesign">Graphic Design</option>
                                <option className='my-2 font-poppins' value="webDesign">Web Design</option>
                                <option className='my-2 font-poppins' value="webDevelopment">Web Development</option>
                            </select>
                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="text" name="title" id="" placeholder='Service name' required/>
                            </div>

                            <textarea className='border-none outline-none mt-6 px-6 py-3 rounded-md bg-slate-100 my-2 w-full font-poppins mb-5' name="message" id="" cols="30" rows="5" placeholder='your message'></textarea>
                            <Link  className='px-2 py-2 w-1/3 mt-8 rounded-full text-center text-white hover:text-white transition-all duration-300 hover:bg-[#5E37DA] bg-[#896EFF] font-source md:mt-0 text-xs sm:text-sm md:text-lg '>Submit</Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;