import { Link, useNavigate } from "react-router-dom";
import googleIcon from '../../assets/icons/Group 573.png'
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Signup = () => {
    const [error, setError] = useState('')
    const { createUser } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const onSubmit = data => {
        const user = {
            name: data.firstName + ' ' + data.lastName,
            email: data.email
        }
        if (data.password !== data.confirmPassword) {
            setError('Password not matched')
        } else {
            
           
            createUser(data.email, data.password)
                .then(res => {
                    axiosPublic.post('/users', user)
                    .then(res => console.log(res.data))
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User created successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    setError('')
                    reset()
                    navigate('/')
                })
                .catch(err => console.log(err))

        }

    };
    // const handleUserSignup = (event)=>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const firstName = form.firstName.value;
    //     const lastName = form.lastName.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const confirmPassword = form.confirmPassword.value;
    //     const userName = firstName + ' ' + lastName;
    //     const user = {
    //         userName,
    //         email,
    //         password,

    //     }
    //     if(password !== confirmPassword){
    //         setError('Password is not matched')
    //     } else{
    //         console.log(user);
    //         setError('')
    //     }

    // }
    return (
        <div className="min-h-screen flex justify-center items-center font-sans my-5">
            <div className=" w-2/5">
                <div className=" border rounded-md  bg-base-100 p-10">
                    <h3 className="mb-5 text-xl font-semibold">Create an account</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="form-control">
                            <input {...register('firstName', { required: true })} type="text" placeholder="First Name" name="firstName" className="border-b bg-base-100 py-2" />
                            {
                                errors.firstName?.type && <p role="alert">First Name is {errors.firstName?.type} </p>
                            }
                        </div>
                        <div className="form-control">
                            <input {...register('lastName')} name="lastName" type="text" placeholder="Last Name" className="border-b bg-base-100 py-2" />
                        </div>
                        <div className="form-control">
                            <input {...register('email', { required: 'Email Adress is required' })} name="email" type="email" placeholder="Email" className="border-b bg-base-100 py-2 bg-transparent" />
                            {
                                errors.email && <p role="alert"> {errors.email.message} </p>
                            }
                        </div>
                        <div className="form-control">
                            <input {...register('password', { required: 'Password is required' })} name="password" type="password" placeholder="Password" className="border-b bg-base-100 py-2" />
                            {
                                errors.password && <p> {errors.password.message} </p>
                            }
                        </div>
                        <div className="form-control">
                            <input {...register('confirmPassword')} name="confirmPassword" type="password" placeholder="Confirm Password" className="border-b bg-base-100 py-2" />
                        </div>
                        <div>
                            {
                                error && <p> {error} </p>
                            }
                        </div>
                        <div className="text-center py-3">
                            <button className="w-full bg-[#F63E7B] text-white p-2 rounded-sm">Create an account</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <h5>Already have an account?<Link className="text-[#F63E7B] ml-1">Login</Link> </h5>
                    </div>
                </div>
                <div className="my-5 flex items-center space-x-2 w-5/6 mx-auto">
                    <div className="flex-grow border-t"></div>
                    <div className="">or</div>
                    <div className="flex-grow border-t"></div>
                </div>
                {/* <div className="divider">or</div> */}
                <div className="space-y-4 w-full">
                    <button className='flex border p-2 gap-2 rounded-full mx-auto '>
                        <FaFacebook className="text-2xl text-blue-500" />
                        <div className='w-80'>
                            <h5 className='font-semibold'>Continue with Facebook</h5>
                        </div>

                    </button>
                    <button className='flex border p-2 gap-2 rounded-full mx-auto '>
                        <img className='w-5' src={googleIcon} alt="" />
                        <div className='w-80'>
                            <h5 className='font-semibold'>Continue with Google</h5>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Signup;