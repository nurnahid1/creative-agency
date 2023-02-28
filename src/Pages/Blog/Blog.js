import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './BlogSlide.css'
// import required modules
import { Autoplay, Navigation } from "swiper";
import './Blog.css'
import { AiOutlineClockCircle, AiOutlineShareAlt } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import blog1 from '../../images/blog.jpg'
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.png'
import blog4 from '../../images/blog4.jpg'
import blog5 from '../../images/blog5.jpg'
import blog6 from '../../images/blog6.png'


const Blog = () => {
    return (
        <div className='my-10 md:my-24'>
            <div>
            <h2 className='text-3xl md:text-5xl text-center font-source py-8 md:py-10 md:mb-10 text-[#1F2471]'>Latest Blog & News</h2>
                <>
                <Swiper
                    slidesPerView={3}
                    
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        340: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                      }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    >

                    {/* Blog 1 */}
                    <SwiperSlide className='rounded-md'>
                        <div className='card border hover:border-indigo-700 rounded-md shadow-md  p-5'>
                            <img className='mb-2' src={blog1} alt="" />
                            <h2 className='text-lg md:text-xl pb-2  font-source mt-2'>What is landing page? Why It's Important</h2>
                            <p className='font-poppins text-md py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis dolorem odio ea voluptatem vel!</p>

                            <div className='h-[1px] w-5/6 bg-slate-300 rounded-full mx-auto mt-2'></div>

                            <div className='flex justify-between px-3  items-center mt-4'>
                               <div className='flex justify-start items-center'>
                                    <div>
                                        <AiOutlineClockCircle className='text-[#957DFF] h-5 w-5'></AiOutlineClockCircle>
                                    </div>
                                    <div> 
                                        <p className='ml-1'>19-Feb-2023</p>
                                    </div>
                               </div>

                                <div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <BsChat className='text-[#957DFF] h-5 w-5'></BsChat>
                                        <p>12</p>
                                        <AiOutlineShareAlt className='text-[#957DFF] h-5 w-5'></AiOutlineShareAlt>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* blog 2 */}
                    <SwiperSlide className='rounded-md'>
                        <div className='card border hover:border-indigo-700 rounded-md shadow-md  p-5'>
                            <img className='mb-2' src={blog2} alt="" />
                            <h2 className='text-lg md:text-xl pb-2 font-source mt-2'>Best websites for startrups</h2>
                            <p className='font-poppins text-md py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis dolorem odio ea voluptatem vel this is the best way to grow a new business.</p>

                            <div className='h-[1px] w-5/6 bg-slate-300 rounded-full mx-auto mt-2'></div>

                            <div className='flex justify-between px-3  items-center mt-4'>
                               <div className='flex justify-start items-center'>
                                    <div>
                                        <AiOutlineClockCircle className='text-[#957DFF] h-5 w-5'></AiOutlineClockCircle>
                                    </div>
                                    <div> 
                                        <p className='ml-1'>19-Feb-2023</p>
                                    </div>
                               </div>

                                <div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <BsChat className='text-[#957DFF] h-5 w-5'></BsChat>
                                        <p>12</p>
                                        <AiOutlineShareAlt className='text-[#957DFF] h-5 w-5'></AiOutlineShareAlt>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* blog-3 */}
                    <SwiperSlide className='rounded-md'>
                        <div className='card border hover:border-indigo-700 rounded-md shadow-md  p-5'>
                            <img className='mb-2' src={blog3} alt="" />
                            <h2 className='text-lg md:text-xl pb-2 font-source mt-2'>Top 10 most popular web technologies</h2>
                            <p className='font-poppins text-md py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis dolorem odio ea voluptatem vel!</p>

                            <div className='h-[1px] w-5/6 bg-slate-300 rounded-full mx-auto mt-2'></div>

                            <div className='flex justify-between px-3  items-center mt-4'>
                               <div className='flex justify-start items-center'>
                                    <div>
                                        <AiOutlineClockCircle className='text-[#957DFF] h-5 w-5'></AiOutlineClockCircle>
                                    </div>
                                    <div> 
                                        <p className='ml-1'>19-Feb-2023</p>
                                    </div>
                               </div>

                                <div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <BsChat className='text-[#957DFF] h-5 w-5'></BsChat>
                                        <p>12</p>
                                        <AiOutlineShareAlt className='text-[#957DFF] h-5 w-5'></AiOutlineShareAlt>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* blog-4 */}
                    <SwiperSlide className='rounded-md'>
                        <div className='card border hover:border-indigo-700 rounded-md shadow-md  p-5'>
                            <img className='mb-2' src={blog4} alt="" />
                            <h2 className='text-lg md:text-xl pb-2 font-source mt-2'>What is branding, Why branding is importan?</h2>
                            <p className='font-poppins text-md py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis dolorem odio ea voluptatem vel!</p>

                            <div className='h-[1px] w-5/6 bg-slate-300 rounded-full mx-auto mt-2'></div>

                            <div className='flex justify-between px-3  items-center mt-4'>
                               <div className='flex justify-start items-center'>
                                    <div>
                                        <AiOutlineClockCircle className='text-[#957DFF] h-5 w-5'></AiOutlineClockCircle>
                                    </div>
                                    <div> 
                                        <p className='ml-1'>19-Feb-2023</p>
                                    </div>
                               </div>

                                <div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <BsChat className='text-[#957DFF] h-5 w-5'></BsChat>
                                        <p>12</p>
                                        <AiOutlineShareAlt className='text-[#957DFF] h-5 w-5'></AiOutlineShareAlt>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Blog-5 */}
                    <SwiperSlide className='rounded-md'>
                        <div className='card border hover:border-indigo-700 rounded-md shadow-md  p-5'>
                            <img className='mb-2' src={blog5} alt="" />
                            <h2 className='text-lg md:text-xl pb-2 font-source mt-2'>Learn Video Marketing</h2>
                            <p className='font-poppins text-md py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis dolorem odio ea voluptatem vel all you need to know for building a success business!</p>

                            <div className='h-[1px] w-5/6 bg-slate-300 rounded-full mx-auto mt-2'></div>

                            <div className='flex justify-between px-3  items-center mt-4'>
                               <div className='flex justify-start items-center'>
                                    <div>
                                        <AiOutlineClockCircle className='text-[#957DFF] h-5 w-5'></AiOutlineClockCircle>
                                    </div>
                                    <div> 
                                        <p className='ml-1'>19-Feb-2023</p>
                                    </div>
                               </div>

                                <div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <BsChat className='text-[#957DFF] h-5 w-5'></BsChat>
                                        <p>12</p>
                                        <AiOutlineShareAlt className='text-[#957DFF] h-5 w-5'></AiOutlineShareAlt>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='rounded-md'>
                        <div className='card border hover:border-indigo-700 rounded-md shadow-md  p-5'>
                            <img className='mb-2' src={blog6} alt="" />
                            <h2 className='text-lg md:text-xl pb-2 font-source mt-2'>SEO is the key of all marketing methos!</h2>
                            <p className='font-poppins text-md py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis dolorem odio ea voluptatem vel!</p>

                            <div className='h-[1px] w-5/6 bg-slate-300 rounded-full mx-auto mt-2'></div>

                            <div className='flex justify-between px-3  items-center mt-4'>
                               <div className='flex justify-start items-center'>
                                    <div>
                                        <AiOutlineClockCircle className='text-[#957DFF] h-5 w-5'></AiOutlineClockCircle>
                                    </div>
                                    <div> 
                                        <p className='ml-1'>19-Feb-2023</p>
                                    </div>
                               </div>

                                <div>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <BsChat className='text-[#957DFF] h-5 w-5'></BsChat>
                                        <p>12</p>
                                        <AiOutlineShareAlt className='text-[#957DFF] h-5 w-5'></AiOutlineShareAlt>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                  
                </Swiper>
                </>
            </div>
        </div>
    );
};

export default Blog;