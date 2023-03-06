import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Login/Loading';
import OrderRow from './OrderRow';

const Orders = () => {
    const [user, loading]= useAuthState(auth)
    const [orders, setOrders] = useState([]);
    
    if(loading){
        <Loading></Loading>
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(res => {
           if(res.status === 401 || res.status === 403){
            return signOut(auth);
           }
           return res.json()
        })
        .then(data => setOrders(data))
    }, [user?.email])

    

    // --- Delete ---
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure want to delete?');
        if(proceed){
          fetch(`http://localhost:5000/orders/${id}`, {
             method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
             console.log(data)
             if(data.deletedCount > 0){
                toast('Deleted Successfully!')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
             }
          })
          
        }
     }

    // --- Update ---
    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(order => order._id !== id);
                const approving = orders.find(order => order._id === id);
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining ];
                setOrders((newOrders))
            }
        })
    }


    return (
    <div className="overflow-x-auto w-12/12 mt-10 rounded-md shadow-sm ml-3">
            <table className="table w-full brounded-xl  ">
            {/* head */}
                <thead >
                    <tr className='bg-[#896EFF]'>
                        <th className=' text-[14px] text-white'>Name</th>
                        <th className=' text-[14px] text-white'>Service</th>
                        <th className=' text-[14px] text-white'>Price</th>
                        <th className=' text-[14px] text-white text-center'>Order</th>
                       
                        <th className=' text-[14px] text-white text-center'>Remove</th>
                    </tr>
                </thead>
                <tbody className=''>
                {/* row  */}
               {
                    orders.map(order => <OrderRow
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                    handleStatusUpdate={handleStatusUpdate}
                    ></OrderRow>)
               }
                </tbody>
            </table>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Orders;