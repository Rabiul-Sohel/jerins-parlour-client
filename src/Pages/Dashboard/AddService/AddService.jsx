import { useState } from 'react';
import useGetUser from '../../../Hooks/useGetUser';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TbCloudUpload } from 'react-icons/tb';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {
    const [currentUser] = useGetUser()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [imagePreview, setImagePreview] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    console.log(location);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const handleImagePreview = event => {
        const file = event.target.files[0]
        if (file) {
            const previewUrl = URL.createObjectURL(file)
            setImagePreview(previewUrl)
        }
        console.log(file);
    }
    const handleAddService = data => {
        const apiKey = import.meta.env.VITE_IMG_API_KEY;
        console.log(data);
        const formData = new FormData()
        formData.append('image', data.image[0])
        // const imageData = {image: data.image[0]}
        // fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        //     method: 'POST',
        //     body: imageData,
        //     headers: {
        //         'Content-type': 'multipart/form-data'
        //     }
        // })
        //  .then(res => res.json())
        //  .then(data => console.log(data))
        axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                // console.log(res.data.data.url)
                if (res.data.success) {
                    setImageUrl(res.data.data.url)
                   
                }
            })
            const title = data.title
                    const description = data.description
                    const image = imageUrl || null
                    const price = parseInt(data.price)
                    const service = {
                        title,
                        description,
                        image,
                        price,
                    }
                    axiosSecure.post('/services', service)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your service has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            reset()
                        }
                    })

        // console.log(data.image[0]);
    }
    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">Add Service</h4>
                <p className="font-semibold"> {currentUser?.name} </p>
            </div>
            <div className="max-w-4xlxl p-10 bg-[#F4F7FC] min-h-[90vh]">
                <form onSubmit={handleSubmit(handleAddService)} >

                    <div className="bg-base-100 p-8  rounded-xl grid grid-cols-2 gap-4  ">
                        <div className='space-y-2 '>
                            <label className="block" htmlFor="">Service Title</label>
                            <input {...register('title', { required: 'Service title is required' })} className="px-3 py-1 bg-base-100 w-full border rounded-sm" type="text" placeholder="Enter title" />
                            {
                                errors.title && <p> {errors.title.message} </p>
                            }
                        </div>
                        <div className='space-y-1 ml-4 '>
                            <label htmlFor="">Image</label>
                            <div className="flex items-center  text-left">
                                {/* <!-- Label for custom file input --> */}

                                <label className="bg-[#FFEAF3] text-[#F63E7B] px-3 py-2 outline outline-1 rounded-md cursor-pointer hover:bg-[#fcf0f6]">
                                    <span className='flex  gap-2 items-center'> <TbCloudUpload className='text-2xl' />  Upload image</span>
                                    {/* <!-- File input hidden but accessible --> */}
                                    <input {...register('image')} onChange={(e) => handleImagePreview(e)} type="file"  className="hidden" />

                                </label>

                                {/* <!-- Placeholder for the file name --> */}
                                {/* <span className="ml-2" id="file-name">No file selected</span> */}
                            </div>
                            {
                                imagePreview && <img className='w-36 h-auto border' src={imagePreview} alt="" />
                            }
                        </div>
                        <div className='space-y-2 '>
                            <label className="block" htmlFor="">Description</label>
                            <textarea {...register('description', { required: 'Description is required' })} className="h-24 px-3 py-1 w-full bg-base-100  border rounded-sm" type="textA" placeholder="Enter Designation" />
                            {
                                errors.description && <p> {errors.description.message} </p>
                            }
                        </div>
                        <div className='space-y-2 ml-5 w-1/2'>
                            <label className="block" htmlFor="">Price</label>
                            <input {...register('price', { required: 'Price is required' })} className=" px-3 py-1 w-full bg-base-100  border rounded-sm" type="number" placeholder="Enter Price" />
                            {
                                errors.price && <p> {errors.price.message} </p>
                            }
                        </div>

                    </div>
                    <div className='text-right m-2'>
                        <input type="submit" value='Submit' className="bg-[#F63E7B] text-white hover:bg-[#f02c6e] px-4 py-1 rounded-sm ml-2 cursor-pointer inline-block " />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddService;