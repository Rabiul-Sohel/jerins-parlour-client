import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe('pk_test_51PWpysKLk0U02GmcZ4c2QHEhiEFhrOk32YxBmpc0j0K1g8LkKT6cPk7f1rCSAZrsTHJPUftkmoGBV0pjnz3MBXFM00rtxJsFH4')
const StripeProvider = ({children}) => {
    
    return <Elements stripe={stripePromise}>
        {children}
    </Elements>
};

export default StripeProvider;