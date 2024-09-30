import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useGetUser from "../Hooks/useGetUser";

 
 
 const BkashPayment = ({service}) => {
    // const {user} = useAuth()
    const [currentUser] = useGetUser()
    // console.log(service._id);
    const axiosSecure = useAxiosSecure()
    const handleBkashPay = async()=>{
        try{
            const {data} = await axiosSecure.post('/bkashPayment', {
                userId: currentUser._id,
                serviceId: service._id

            })
            // console.log(data);
            window.location.href = data.bkashURL
            
        } catch(error){
            console.log(error.message);
        }
    }
    return (
        <div className="flex justify-center mt-5">
           <button onClick={handleBkashPay} className="bg-pink px-16 rounded-md text-white py-2">bKash Pay</button> 
        </div>
    );
 };
 
 export default BkashPayment;