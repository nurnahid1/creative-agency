import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import checkout from '../..//images/checkout.jpg'
import auth from '../../firebase.init';

const CheckOut = () => {
    const {id}= useParams()
    const [singleService, setSingleService] = useState([]);
    const {_id, name, Price} = singleService
    useEffect(()=>{
        const url = `https://creative-agency-backend.vercel.app/checkout/${id}`
       
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleService(data))
    }, [])

    const [user]= useAuthState(auth)

    // Handle Place order
    const handlePlaceOrder = e =>{
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = user?.email || 'Please register first';
        const phone = form.phone.value;
        const message = form.message.value;

        // Send order Info to database
        const order = {
            service: _id,
            serviceName : name,
            Price,
            customer: userName,
            email,
            phone,
            message
        }


        fetch('https://creative-agency-backend.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast('Order Placed Successfully!');
                form.reset();
            }
        })
        .catch(er => console.log(er))
    }

    return (
        <div>
            <div>
                <div className='relative'>
                    <img className='w-full mx-auto rounded-md mt-6 mb-2' src={checkout} alt="" />
                    <h2 className='text-white text-lg md:text-4xl font-poppins absolute md:top-32 md:left-32 top-10 left-14 underline'>Checkout</h2>
                </div>

               <div
               className='py-10'>
                <h2 className='text-xl md:3xl font-poppins font-thin '>You are ordering: <span className='font-poppins text-[#5E37DA] md:text-xl text-lg '>{name} </span> service.</h2>
                <h2 className='text-xl md:3xl font-poppins font-thin '>Service Price: <span className='font-poppins text-[#5E37DA] md:text-xl text-lg '>${Price} </span></h2>
                
               </div>
                {/* ------- Checkout Form -------- */}

                <div className='w-full '>
                    <div  data-aos="fade-up" data-aos-duration="2000" className='w-8/12 mx-auto'>
                        <form onSubmit={handlePlaceOrder} className='flex flex-col justify-center items-center ' action="">

                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="text" name="name" id="" placeholder='Your name' defaultValue={user?.displayName} readOnly required/>

                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="email" name="email" id="" defaultValue={user?.email} placeholder='Email address' readOnly required/>

                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="text" name="phone" id="" placeholder='Phone number' required/>

                          
                            <input className='border-none outline-none px-6 py-3 rounded-full bg-slate-100 my-2 w-full font-poppins' type="text" name="service" id="" placeholder='Service name' required/>
                            

                            <textarea  className='border-none outline-none mt-6 px-6 py-3 rounded-md bg-slate-100 my-2 w-full font-poppins mb-5' name="message" id="" cols="30" rows="5" placeholder='your message'></textarea>

                            {/* Order Button */}
                            <input  className='px-2 py-2 w-1/3 mt-8 rounded-full text-center text-white hover:text-white transition-all duration-300 hover:bg-[#5E37DA] bg-[#896EFF] font-source md:mt-0 text-xs sm:text-sm md:text-lg ' type="submit" value="Confirm Order" />
                        </form>
                    </div>
                </div>

                {/* ---- End ---- */}
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default CheckOut;