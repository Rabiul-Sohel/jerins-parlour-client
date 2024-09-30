import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useGetUser from "../Hooks/useGetUser";


const PaymentButton2 = ({service}) => {
    const [currentUser] = useGetUser()
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const [activeBtn, setActiveBtn] = useState(true)
    const order = {
        serviceId: service?._id,
        name: currentUser.name,
        email: currentUser.email
    }

    const handlePayment = ()=>{
        setLoading(true)
        setActiveBtn(false)
        axiosSecure.post('/payment-initiate',order)
            .then(res => {
                if(res.data.url){
                    window.location.replace(res.data.url)
                }
            })


    }
    return (
        <button disabled={!activeBtn} className="bg-pink hover:bg-hPink text-white px-5 w-1/2 py-3 rounded-md" onClick={handlePayment} >Pay Now</button>
    );
};

export default PaymentButton2;