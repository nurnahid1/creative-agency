import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const Orders = () => {
    const [user]= useAuthState(auth)
    const [orders, setOrders] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email])

    return (
    <div className="overflow-x-auto w-full mt-10 rounded-md shadow-sm">
            <table className="table w-full brounded-xl  ">
            {/* head */}
                <thead >
                    <tr className='bg-[#896EFF]'>
                        <th className=' text-[14px] text-white'>Name</th>
                        <th className=' text-[14px] text-white'>Service</th>
                        <th className=' text-[14px] text-white'>Phone</th>
                        <th className=' text-[14px] text-white'>Price</th>
                        <th className=' text-[14px] text-white'>Remove</th>
                    </tr>
                </thead>
                <tbody className=''>
                {/* row  */}
               {
                    orders.map(order => <OrderRow
                    key={order._id}
                    order={order}
                    ></OrderRow>)
               }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;