import React  from 'react';
import { useLoaderData } from 'react-router-dom';



const Pay = () => {
    const payment = useLoaderData()
    console.log(payment)
    
    return (
        <div>

            
        </div>
    );
};

export default Pay;