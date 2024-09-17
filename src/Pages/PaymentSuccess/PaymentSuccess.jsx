import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const {tranId} = useParams()
    return (
        <div>
            <h2>Your payment has been succeeded: {tranId} </h2>
        </div>
    );
};

export default PaymentSuccess;