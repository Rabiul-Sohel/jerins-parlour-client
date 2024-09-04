import { Link } from "react-router-dom";
import googleIcon from '../../assets/icons/Group 573.png'
import { FaFacebook } from "react-icons/fa";


const Signup = () => {
    return (
        <div className="min-h-screen flex justify-center items-center font-sans">
            <div className=" w-2/5">
                <div className=" border rounded-md  bg-base-100 p-10">
                    <h3 className="mb-5 text-xl font-semibold">Create an account</h3>
                    <form className="space-y-3">
                        <div className="form-control">
                            <input type="text" placeholder="First Name" className="border-b bg-base-100 py-2" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Last Name" className="border-b bg-base-100 py-2" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="border-b bg-base-100 py-2" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" className="border-b bg-base-100 py-2" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Confirm Password" className="border-b bg-base-100 py-2" required />
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