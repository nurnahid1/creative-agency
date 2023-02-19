import React from 'react';
import { Link } from 'react-router-dom';
import './NewsLetter.css'
import news from '../../../images/news.png'

const NewsLetter = () => {
    return (
        <div>
            <div>
                <div>
                    <h2>Subscribe To Our Newsletter For Latest Update</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique assumenda reiciendis ullam nihil vitae repellat praesentium unde labore adipisci.</p>

                    <div className='py-3 rounded-full bg-white'>
                        <input className='' type="email" name="email" id="" placeholder='Email Address' />
                        <Link className='button font-source mt-6'>Subscribe Now</Link>
                    </div>
                </div>
                <div>
                    <img src={news } alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;