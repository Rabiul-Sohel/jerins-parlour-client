import React, { useEffect, useState } from 'react';
import useGetUser from '../../../Hooks/useGetUser';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TbCloudUpload } from 'react-icons/tb';
import creditImg from '../../../assets/icons/credit-card 1.png'
// import paypalImg from '../../../assets/icons/image 17.png'
import StripeProvider from '../../../Stripe/StripeProvider';
import PaymentForm from '../../../Stripe/PaymentForm';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import PaymentButton from '../../../SSLCommerz/PaymentButton';
import PaymentButton2 from '../../../SSLCommerz/PaymentButton2';
import commerzImg from '../../../assets/icons/icon-256x256.png'

const Book = () => {
    const [currentUser] = useGetUser()
    const location = useLocation()
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const price = Math.round(location.state?.price) * 100
    const service = location.state
    console.log(service);
    // const roundedPrice = Math.round(price * 100)/100

    useEffect(()=>{
        const createPaymentIntect = async () =>{
            if(location.state.price){
                const {data} = await axiosSecure.post('/create-payment-intent', {amount: price})
            setClientSecret(data.clientSecret)
            }
        }
        createPaymentIntect()
    },[axiosSecure, price, location])
    console.log(clientSecret);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const handleBook = data => {
        console.log(data);
    }
    const handlePaymentMethod = event => {
        setPaymentMethod(event.target.value)
    }
    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">Book</h4>
                <p className="font-semibold"> {currentUser?.name} </p>
            </div>
            <div className="max-w-4xlxl  bg-[#F4F7FC] min-h-[90vh]  ">
                <div className='w-3/5 p-8 space-y-4'>
                    <form className='' >
                        <div className=" space-y-4   rounded-xl  ">
                            <div className='space-y-2'>
                                <input readOnly {...register('customerName', { required: 'Service title is required' })} className="p-4 bg-base-100 w-full  rounded-sm" type="text" defaultValue={currentUser.name} />
                                {
                                    errors.title && <p> {errors.title.message} </p>
                                }
                            </div>

                            <div className='space-y-2'>

                                <input readOnly {...register('email', { required: 'Description is required' })} className="p-4 w-full bg-base-100   rounded-sm" type="textA" defaultValue={currentUser.email} />
                                {
                                    errors.description && <p> {errors.description.message} </p>
                                }
                            </div>
                            <div className='space-y-2'>

                                <input readOnly {...register('title', { required: 'Title is required' })} className="p-4 w-full bg-base-100   rounded-sm" type="textA" defaultValue={location.state?.title} />
                                {
                                    errors.description && <p> {errors.description.message} </p>
                                }
                            </div>


                        </div>

                    </form>
                    <div>
                        <label htmlFor="">Pay with</label>
                        <form className='flex gap-6'>
                            <div className='flex items-center space-x-1'>
                                <input
                                    onChange={handlePaymentMethod}
                                    value='Credit Card'
                                    checked={paymentMethod === 'Credit Card'}
                                    name='paymentMethod'
                                    type="radio" id="" />
                                <img className='w-5' src={creditImg} alt="" />
                                <p> Credit Card</p>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input
                                    onChange={handlePaymentMethod}
                                    checked={paymentMethod === 'SSLCommerz'}
                                    value='SSLCommerz'
                                    name='paymentMethod'
                                    type="radio" id="" />
                                <img className='w-5' src={commerzImg} alt="" />
                                <p> SSLCommerz </p>
                            </div>

                        </form>

                    </div>
                    {
                        paymentMethod === 'Credit Card' && 
                        <StripeProvider>
                            <PaymentForm clientSecret={clientSecret} booking={location.state} paymentMethod={paymentMethod}></PaymentForm>
                        </StripeProvider>
                    }
                    {
                      paymentMethod === 'SSLCommerz' && 
                     
                      <PaymentButton2  service={service}></PaymentButton2>
                    }
                </div>
            </div>

        </div>
    );
};

export default Book;