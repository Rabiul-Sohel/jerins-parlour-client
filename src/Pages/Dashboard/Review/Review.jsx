import React, { useState } from 'react';
import useGetUser from '../../../Hooks/useGetUser';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const [currentUser] = useGetUser()
    const [rating, setRating]= useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    // console.log(currentUser);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const totalStars = 5;
    const ratingArray = Array.from({length: totalStars}, (v, i)=>i +1)
    // console.log(rating);

    // const hanldeRating = (event) =>{
    //     const value = parseInt(event.target.value)
    //     // console.log(value);
    //     setRating(value)
    // }
    const handleReview = data =>{
        
        data.rating = rating 
        data.customerImage = currentUser.image
        data.email = currentUser.email
        // console.log(data);
        axiosSecure.post('/reviews', data)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank You for your valueable review",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                }
            })
        
    }

    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">Review</h4>
                <p className="font-semibold"> {currentUser?.name} </p>
            </div>
            <div className="max-w-4xlxl  bg-[#F4F7FC] min-h-[90vh]  ">
                <div className='w-3/5 px-10 py-14 space-y-4'>
                    <form onSubmit={handleSubmit(handleReview)} className='' >
                        <div className=" space-y-4   rounded-xl  ">
                            <div className='space-y-2'>
                                <input readOnly {...register('customerName', { required: 'Service title is required' })} className="p-4 bg-base-100 w-full  rounded-sm" type="text" defaultValue={currentUser.name} />
                                {
                                    errors.title && <p> {errors.title.message} </p>
                                }
                            </div>

                            <div className='space-y-2'>

                                <input {...register('designation', { required: "Designation and company's name is required" })} className="p-4 w-full bg-base-100   rounded-sm" type="textA" placeholder="Designation, Company's name" />
                                {
                                    errors.designation && <p> {errors.designation.message} </p>
                                }
                            </div>
                            <div className='space-y-2'>

                                <textarea  {...register('description', { required: 'Description is required' })} className="p-4 w-full bg-base-100   rounded-sm" type="textA" placeholder='Description' />
                                {
                                    errors.description && <p> {errors.description.message} </p>
                                }
                            </div>

                        </div>
                        <div className="rating my-3 space-x-3">
                            {
                                ratingArray.map(star => 
                                    <input
                                    className={`mask mask-star-2 ${star <= (hoverRating || rating)  ? 'bg-yellow-500' : 'bg-gray-500'}`}
                                    onClick={()=> setRating(star)}
                                    onMouseEnter={()=> setHoverRating(star)}
                                    onMouseLeave={()=> setHoverRating(0)}
                                    value={star}
                                    key={star}
                                    type="radio" 
                                    name="rating" />
                                )
                            }
                        </div>
                        <div>
                        <input className='bg-pink py-3 cursor-pointer hover:bg-hPink w-44 rounded-md text-white mt-2' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Review;