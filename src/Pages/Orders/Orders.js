import React from 'react';

const Orders = () => {
    return (
        <div>
            <h2>Order page</h2>
             {/* ------ Table ----- */}
            <div className="overflow-x-auto w-full mt-10">
            <table className="table w-full border border-black rounded-md">
            {/* head */}
                <thead>
                <tr className='border border-black'>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Cancle Order</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Hart Hagerty</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Zemlak, Daniel and Leannon
                    </td>
                    <td>Purple</td>
                </tr>
                
                
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Orders;