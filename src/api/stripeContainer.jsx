import React from "react";
import {loadStripe} from "@stripe/stripe-js";   
import{Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./checkoutStripeForm";
const PUBLIC_KEY="pk_live_51LuDvvFk3OFZytQ9AfXnXltGrf9qhHSB5jYQrheRI0sX9j0XT3JdmJTofE0yJ1dXfvt3cNG7TbIY1qp9aTIONqXT00T1qHOq9L";
//initialiser stripe avec notre key publique
const stripeTestPromise=loadStripe(PUBLIC_KEY);
const StripeContainer =()=>{
    return(
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm/>
        </Elements>
    )
}
export default StripeContainer;
