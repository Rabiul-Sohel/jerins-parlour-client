import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentError = () => {
    const [searchParams] = useSearchParams()
    const message = searchParams.get('message')
    return (
        <div className='flex justify-center items-center flex-col min-h-[70vh]'>
            <h4>sorry</h4>
            <p>Payment {message} </p>
        </div>
    );
};

export default PaymentError;