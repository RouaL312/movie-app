const express = require("express");
const app = express();
require("dotenv").config;
const stripe =require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors =require("cors");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors);
app.post('stripe/charge',cors(),async(req,res)=>{
    let{amount,id}=req.body;
    console.log("alount and id",amount,id);
    try{
        const payement =await stripe.payementIntents.create({
            amount:amount,
            currency: 'EUR',
            description:"movie time",
            payement_method : id,
            confirm:true,
        });
        res.json({
            message: "payement réussi",
            success:true,
        })
    }catch(error){
console.log("erreur .. ", error);
res.json({
    message:"le payement est échoué",
    success:false,
})
    }
})
app.listen(process.env.PORT || 8080,()=>{
    console.log("serveur démarré..");
});