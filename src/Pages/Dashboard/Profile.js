import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user]= useAuthState(auth)
    console.log(user)
    return (
        <div className='mt-8 md:mt-16'>
            
            <div className='flex flex-col md:flex-row gap-y-5 justify-center items-center md:gap-14 border border-slate-300 shadow-md rounded-md p-6 w-5/6 md:w-2/3  mx-auto'>
                <img className='rounded-sm' src={user.photoURL} alt="" />
                <div>
                    <h2 className='font-poppins text-center md:text-start text-lg md:text-2xl mb-1' >Wellcome to you profile </h2>
                    <h2 className='font-poppins text-center md:text-start text-md md:text-lg text-[#957DFF]'>{user.displayName}</h2>
                    <h2 className='font-poppins text-center md:text-start text-sm md:text-md text-[#957DFF]'>{user.email}</h2>
                </div>
            </div>
        </div> 
    );
};

export default Profile;