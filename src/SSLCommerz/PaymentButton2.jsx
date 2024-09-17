import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useGetUser from "../Hooks/useGetUser";


const PaymentButton2 = ({service}) => {
    const [currentUser] = useGetUser()
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const order = {
        serviceId: service?._id,
        customerName: currentUser.name,
        customerEmail: currentUser.email
    }

    const handlePayment = ()=>{
        setLoading(true)
        axiosSecure.post('/payment-initiate',order)
            .then(res => {
                if(res.data.url){
                    window.location.replace(res.data.url)
                }
            })


    }
    return (
        <button className="bg-pink hover:bg-hPink text-white px-5 w-1/2 py-3 rounded-md" onClick={handlePayment} >Pay Now</button>
    );
};

export default PaymentButton2;