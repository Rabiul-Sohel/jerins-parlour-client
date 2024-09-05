import logoImage from '../../assets/logo.png'
import googleIcon from '../../assets/icons/Group 573.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { signinUser } = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = data => {
        console.log(data);
        const email = data.email;
        const password = data.password
        signinUser(email, password)
            .then(res => {

                // toast.success('Login successful')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='min-h-screen flex justify-center items-center font-sans'>
            <div className='text-center space-y-6'>
                <img className='w-40 mb-12 mx-auto' src={logoImage} alt="" />
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register('email', { required: 'Email is required' })} placeholder="email" className="input input-bordered" />
                            {
                                errors.email && <p className='text-left' role='alert'> {errors.email.message} </p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password', { required: 'Password is required' })} type="password" placeholder="password" className="input input-bordered" />
                            {
                                errors.password && <p className='text-left'> {errors.password.message} </p>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="w-full bg-[#F63E7B] p-2 text-white rounded-md hover:bg-[#ee3070]">Login</button>
                        </div>
                    </form>
                </div>
                <div className='space-y-3'>
                    <h4 className='text-2xl font-bold mb-5'>Login With</h4>
                    <button className='flex border p-2 gap-2                      rounded-full '>
                        <img className='w-5' src={googleIcon} alt="" />
                        <div className='w-80'>
                            <h5 className='font-semibold'>Continue with Google</h5>
                        </div>

                    </button>
                    <h5>Don't have an account? <Link to='/signUp' className='text-[#F63E7B] font-semibold underline'>Create an account</Link> </h5>
                </div>

            </div>
           
        </div>
        
    );
};

export default Login;