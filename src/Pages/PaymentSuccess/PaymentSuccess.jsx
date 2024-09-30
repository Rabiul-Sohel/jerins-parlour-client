import { useParams, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
    // const {tranId} = useParams()
    const [searchParams] = useSearchParams()
    const message = searchParams.get('message')
    return (
        <div className="flex justify-center items-center flex-col min-h-[70vh]">
            <h4>Congratulations</h4>
            <p> Payment {message} </p>
        </div>
    );
};

export default PaymentSuccess;