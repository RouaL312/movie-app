import React from "react";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "axios";

//pour accéder au éléments de la card du paiement
export const CheckoutForm=()=>{
    const stripe = useStripe();
    const elements=useElements();
    //token sera envoyé au backend pour réaliser le payement
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const {error,payementMethod}=await stripe.createPaymentMethod({
            type:'card',
            card:elements.getElement(CardElement),
            billing_details: {
                name: 'Some name',
              },
        });
        if(!error)
        {
            console.log("token généré : ",payementMethod);
            try{
                const {id}=payementMethod;
                const response = await axios.post("http://localhost:8080/stripe/charge",
                {
                    amount : 100,
                    id:id,
                });
                if(response.data.success )
                console.log("payement réussi");
            }
            catch(error){     
                console.log("payement failed",error);
            }
        }else{
            console.log(error.message);

        }

    }
    return(
        <form onSubmit={handleSubmit} style={{maxWidth:400}}>payer
            <CardElement options={{hidePostalCode:true}}></CardElement>
<button>Payer</button>
        </form>
    )
}
export default CheckoutForm;