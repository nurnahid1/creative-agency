import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png'
import shape from '../../images/shape.png'
import Footer from '../Home/Footer/Footer';
import Navber from '../Home/Navber/Navber';
import './Register.css'

const Register = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // navigate or login successfull

    }

    return (
        <div>
            <div className='mx-8 md:mx-24 lg:mx-28 mt-8'>
            <Navber></Navber>
            <div className='w-full text-center mt-16 mx-auto'>
                <form className='border md:w-3/6 lg:w-4/12 mx-auto text-center pb-10 px-5 rounded-md shadow-xl relative ' onSubmit={handleSubmit} action="">
                    <div>
                        <img className='md:w-16 w-8 absolute top-5' src={shape} alt="" />
                    </div>
                    <h2 className='text-lg font-poppins pb-10 pt-6'>Register New Account</h2>
                    <input className='px-6 py-3 w-full outline-none bg-[#e9ecef] rounded-full mb-4  font-poppins' type="text" name="name" id="name" placeholder='Full name' required /><br />
                    <input className='px-6 py-3 w-full outline-none bg-[#e9ecef] rounded-full mb-4  font-poppins' type="email" name="email" id="email" placeholder='Email address' required /><br />
                    <input className='px-6 py-3 w-full outline-none bg-[#e9ecef] rounded-full  font-poppins'  type="password" name="password" id="password" placeholder='Password' required /><br />
                    <input className='px-1 py-3 w-2/4 outline-none bg-[#896EFF] rounded-full mt-5 hover:bg-[#8600D3] text-white font-poppins text-md'  type="submit" value="Sign Up" />
                    <p className='font-poppins text-sm mt-3'>Already have account? <Link to={'/login'} className='undereline text-indigo-600'>Login</Link></p>
                    {/* Divider */}
                    <div className="flex w-full items-center">
                        <div className="grid  flex-grow h-[1px] card bg-gray-300 rounded-box place-items-center"></div>
                        <div className="divider divider-horizontal">OR</div>
                        <div className="grid h-[1px] flex-grow card bg-gray-300 rounded-box place-items-center"></div>
                        </div>
                    {/* Social Login */}
                    <div className='flex justify-center items-center border rounded-full hover:shadow-md'>
                        <img className='h-6 w-6 mr-2' src={google} alt="" />
                        <Link className='py-2 font-poppins'>Google Sign In</Link>
                    </div>
                </form>
            </div>
           </div>
                    <div className='footerBg'>
                        <Footer></Footer>
                    </div>
        </div>
    );
};

export default Register;