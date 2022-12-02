const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();
const stripe =require("stripe")(process.env.STRIPE_KEY);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/create-checkout-session", async (req, res) => {
    const line_items = [{
        price_data: {
            currency: "usd",
            product_data: {
                name: "Monthly Subscription",
                description: "subscription",
            },
            unit_amount: 1000,
        },
        quantity: 1,
    }];


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["US", "CA", "KE","TN"],
        },
        phone_number_collection: {
            enabled: true,
        },
        line_items,
        mode: "payment",
        customer: customer.id,
        success_url: `${process.env.CLIENT_URL}/`,
        cancel_url: `${process.env.CLIENT_URL}/movie`,
    });
    // res.redirect(303, session.url);
    res.send({ url: session.url });
});

app.listen(process.env.PORT || 8080, () => {
    console.log("serveur démarré..");
});