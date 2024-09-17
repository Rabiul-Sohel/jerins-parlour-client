import { redirect } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SSLCommerzPayment from 'sslcommerz-lts';
import useGetUser from "../Hooks/useGetUser";

const PaymentButton = ({service}) => {
    const [currentUser] = useGetUser()
    console.log(service);
    const axiosSecure = useAxiosSecure()
    const initiatePayment = ()=>{
       const data = {
        service_id: service._id,
        customer_name: currentUser.name,
        customer_email: currentUser.email,

       }
        axiosSecure.post('/initiate-payment', data)
        .then(res => {
            console.log(res);
            if(res.data){
                console.log(res.data);
                // window.location.href = res.data 
                window.location.replace(res.data) // more better
            }
        })
    }
    return (
        <div>
        <button onClick={initiatePayment}>Pay Now</button>
    </div>
    );
};

export default PaymentButton;