import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useGetUser from "../../../Hooks/useGetUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const MakeAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [savedUser] = useGetUser()
    console.log(savedUser);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const handleMakeAdmin = data => {
        // console.log(data);
        axiosSecure.patch(`/users/${data?.email}`)
            .then(res => {
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Your work has been saved`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    } 
    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">Make Admin</h4>
                <p className="font-semibold"> {savedUser?.name} </p>
            </div>
            <div className="max-w-4xlxl p-10 bg-[#F4F7FC] min-h-[90vh]">
                <form onSubmit={handleSubmit(handleMakeAdmin)} className="bg-base-100 p-5 h-80 rounded-lg ">
                    
                        <label className="block" htmlFor="">Email</label>
                        <input {...register('email', { required: 'Email is required' })} className="px-3 py-1 w-1/2 bg-base-100 border rounded-md" type="email" placeholder="jon@gamil.com" />
                        
                    
                    <input type="submit" value='Submit' className="bg-[#F63E7B] text-white hover:bg-[#f02c6e] px-4 py-1 rounded-md ml-2 cursor-pointer inline-block " />
                    {
                            errors.email && <p> {errors.email.message} </p>
                        }
                </form>
            </div>

        </div>
    );
};

export default MakeAdmin;