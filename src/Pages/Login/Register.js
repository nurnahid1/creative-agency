import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import shape from '../../images/shape.png'
import Footer from '../Home/Footer/Footer';
import Navber from '../Home/Navber/Navber';
import Loading from './Loading';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Register.css'

const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();
      let signInError;



      if(error || googleError  || updateError ){
        signInError = <p className='text-white py-1'>{error?.message || googleError?.message || updateError?.message}</p>
      }
      if(user|| googleUser ){
        console.log(user || googleUser )
      }
      if(loading || googleLoading || updating ){
       return <Loading></Loading>
      }

    const onSubmit = async(data) =>{
       console.log(data)
       await createUserWithEmailAndPassword(data.email, data.password)
       alert('Check your email to varify!')
        await updateProfile({ displayName:data.name });
        navigate('/')
        console.log('profile updated') 
    };

    return (
        <div>
            <div className='mx-8 md:mx-24 lg:mx-28 mt-8'>
            <Navber></Navber>
            <div className='w-full text-center mt-16 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='border md:w-3/6 lg:w-4/12 mx-auto text-center pb-10 px-5 rounded-md shadow-xl relative '  action="">
                    <div>
                        <img className='md:w-16 w-8 absolute top-5' src={shape} alt="" />
                    </div>
                    <h2 className='text-lg font-poppins pb-10 pt-6'>Register New Account</h2>
                    {/* ------------ Name ----------- */}
                   
                <div  className="form-control w-full max-w-xs">
                <input type="text" placeholder="Your Name" 
                className='px-6 py-3 w-full outline-none bg-[#e9ecef] rounded-full  font-poppins' 
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required!',
                    },
                  })}
                />
                <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.name.message}</span>}
                </label>
                </div>
                    
                 {/* ------------- Email --------- */}
                 
                <div className="form-control w-full max-w-xs">
                <input type="email" placeholder="Your Email" 
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
                <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                    
                </label>
                </div>

                  {/* --------- Password ---------- */}
                <div  className="form-control w-full max-w-xs">
                <input type="password" placeholder="Your Password" 
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
                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-sm text-red-600">{errors.password.message}</span>}
                {errors.password?.type === 'pattern' && <span className="label-text-alt text-sm text-start text-red-600">{errors.password.message}</span>}
                </label>
                </div>


                {/*  Sign Up Button  */}
                <input className='px-1 py-3 w-2/4 outline-none bg-[#896EFF] rounded-full mt-5 hover:bg-[#8600D3] text-white font-poppins text-md'  type="submit" value="SignUp" />




                <p className='font-poppins text-sm mt-3'>Already have account? <Link to={'/login'} className='undereline text-indigo-600'>Login</Link></p>
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
        </div>
    );
};

export default Register;