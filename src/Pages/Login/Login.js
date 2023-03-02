import React, { useState } from 'react';
import './Login.css'
import google from '../../images/google.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import shape from '../../images/shapeT.png'
import Navber from '../Home/Navber/Navber';
import Footer from '../Home/Footer/Footer';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
      const navigate = useNavigate()
      const location = useLocation()
      const [email, setEmail]= useState('');
      let from = location.state?.form?.pathname || "/"
      let signInError;

      if(user || gUser || fUser){
        console.log(user || gUser || fUser)
      }
      if( loading || gLoading || fLoading){
        return <Loading></Loading>
      }
      if(error || gError || fError){
        signInError = <p className='text-white py-1'>{error?.message || gError?.message || fError?.message} </p>
      }
      
     const toastMessage = () => {
       toast('Give email & password to Login');      
     }

    const forgetPassword = () =>{
        sendPasswordResetEmail(auth, email)
      .then(() => {
      if(email){
        toast('Password reset email sent!')
      }
     else{
        toast('Please enter your email')
      }
      })
    }
     
    const onSubmit = (data) => {
       signInWithEmailAndPassword(data.email, data.password)
       navigate(from, {replace:true});
        console.log(data)
    };

    return (
        <div>
           <div className='mx-8 md:mx-24 lg:mx-28 mt-8'>
            <Navber></Navber>
            <div className='w-full text-center mt-16 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='border md:w-3/6 lg:w-4/12 mx-auto text-center pb-10 px-5 rounded-md shadow-xl relative '  action="">
                    <div>
                        <img className='md:w-12 w-8 absolute top-[-1px]' src={shape} alt="" />
                    </div>
                    <h2 className='text-lg font-poppins pb-10 pt-6'>Login Your Account</h2>

                {/* -------------- Email -------------- */}
                 <div onBlur={e=>setEmail(e.target.value)} className="form-control  w-full max-w-xs">
                
                <input type="email"  name="email" placeholder="Email address" 
                className='px-6 py-3 w-full outline-none bg-[#e9ecef] rounded-full  font-poppins' 
                {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required!',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid email'
                    }
                  })}
                />
                </div>

                <label className="label mb-2">
                {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}       
                </label>

                {/* ----------- Password --------- */}
                
                <div className="form-control w-full max-w-xs">
                <input type="password" name="password" placeholder="password" 
                className='px-6 py-3 w-full outline-none bg-[#e9ecef] rounded-full  font-poppins'  
                {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required!',
                    },
                    minLength: {
                        value: 6,
                        message: 'password must be at least 6 characters '
                      },
                    pattern: {
                      value: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                      message:'Password must have uppercase and special character',
                    },
                  })}
                />
                </div>

                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                {errors.password?.type === 'pattern' && <span className="label-text-alt text-sm text-start text-red-600">{errors.password.message}</span>}       
                </label>
                
                {/* Login error */}
                {signInError}

                {/* Login Button */}
                <input onClick={toastMessage} className='px-1 py-3 mt-2 mb-2 w-2/4 outline-none bg-[#896EFF] rounded-full hover:bg-[#8600D3] text-white font-poppins text-md'  type="submit" value="Login" />

                    <p className='font-poppins text-sm mt-3'>Don't have account? <Link to={'/register'} className='undereline text-indigo-600'>Sign Up</Link></p>
                    {/* Divider */}
                    <div className="flex w-full items-center">
                        <div className="grid  flex-grow h-[1px] card bg-gray-300 rounded-box place-items-center"></div>
                        <div className="divider divider-horizontal">OR</div>
                        <div className="grid h-[1px] flex-grow card bg-gray-300 rounded-box place-items-center"></div>
                        </div>
                    {/* ------- Social Login -------- */}
                    <Link onClick={()=> signInWithGoogle()} className='flex justify-center items-center border rounded-full hover:shadow-md'>
                        <img className='h-6 w-6 mr-2' src={google} alt="" />
                        <span className='py-2 font-poppins'>Google Sign In</span>
                    </Link>

                   
                
                </form>
            </div>
           </div>
                    <div className='footerBg'>
                        <Footer></Footer>
                    </div>
                    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;