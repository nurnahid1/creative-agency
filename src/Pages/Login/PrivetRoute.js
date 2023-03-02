import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const PrivetRoute = ({children}) =>{
    const [user, loading] = useAuthState(auth)
    const location = useLocation();

    if(user){
        return children;
    }

    if(loading){
       return <Loading></Loading>
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
    
};

export default PrivetRoute;