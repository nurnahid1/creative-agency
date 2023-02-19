import React from 'react';
import { Link } from 'react-router-dom';
import './NewsLetter.css'
import news from '../../../images/news.png'

const NewsLetter = () => {
    return (
        <div className='my-14 md:my-24'>
            <div className="flex flex-col md:flex-row-reverse justify-center items-center py-10 md:py-16 gap-20">
                <div>
                    <h2 className='text-3xl md:text-5xl font-source font-bold md:pb-6 pb-3 text-white  text-center md:text-start'>Subscribe To Our Newsletter For Latest Update</h2>
                    <p className='text-white font-poppins text-md pb-10 text-center md:text-start '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique assumenda     reiciendis ullam nihil vitae repellat praesentium unde labore adipisci.</p>

                    <div className='py-1 md:w-5/6 px-2 md:px-0 rounded-md md:rounded-full bg-white text-center flex flex-col md:flex-row md:justify-center'>
                        <input className='px-2 md:w-4/6 py-2 rounded-full border-none outline-none mr-1 md:mr-4' type="email" name="email" id="" placeholder='Email Address' required/>
                        <Link  className='px-3 py-3 rounded-full text-white hover:text-white hover:bg-[#6A48FF] bg-[#896EFF] font-source mt-6 md:mt-0 text-xs sm:text-sm md:text-lg '>Subscribe Now</Link>
                    </div>
                </div>
                <div>
                    <img className='max-w-xs md:max-w-md' src={news } alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;