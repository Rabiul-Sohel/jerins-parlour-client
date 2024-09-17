import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useGetUser from '../Hooks/useGetUser';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const PaymentForm = ({clientSecret, booking, paymentMethod}) => {
    const stripe = useStripe()
    const elements = useElements()
    const location = useLocation()
    const [currentUser] = useGetUser()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    console.log(paymentMethod);


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const cardElement = elements.getElement(CardNumberElement)
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: currentUser.name
                }
            }
        })
        if (error) {
            setError(error.message)
        } else if (paymentIntent.status === 'succeeded') {
            const order = {
                customerName: currentUser.name,
                customerEmail: currentUser.email,
                booking,
                transactionId: paymentIntent.id,
                status:'Pending',
                paymentMethod
            }
            console.log(order);
            setSuccess(true)
            console.log(paymentIntent);
            axiosSecure.post('/orders', order)
             .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Payment has been done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/success')
                }
             })
           

        }
    }
    return (
        <form className='block w-full my-3 ' onSubmit={handleSubmit} >
            <div className='grid grid-cols-2 gap-4 '>
                <CardNumberElement options={{ placeholder: 'Card Number', }} className='col-span-2 p-4 bg-base-100 rounded-sm'></CardNumberElement>
                <CardExpiryElement className=' p-4 bg-base-100 rounded-sm' ></CardExpiryElement>
                <CardCvcElement className=' p-4 bg-base-100 rounded-sm ' ></CardCvcElement>
            </div>
            <div className='mt-3 flex items-center justify-between'>
                <p> Your Service  charged will be <span className='font-bold'>${location.state?.price}</span> </p>
                <button disabled={!stripe || !elements} className='bg-[#F63E7B] text-white hover:bg-[#f12d6f] px-16 py-4 rounded-md' type='submit'>Pay</button>
            </div>
            {error && <div>{error}</div>}
            {success && <div>Payment successful!</div>}
        </form>
    );
};

export default PaymentForm;