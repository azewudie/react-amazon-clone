const functions = require("firebase-functions");
// import Payment from "../../src/Payment";
const express = require("express");
const cors = require("cors");
// const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51LDaZ1EnCVDhU3cmN6XMnKK5y5hBAVQOPpSJ7d32tozXoXp8PxZYjoupMvuy8W0a6ZvDxpeb8lIKBhUprbkhdKcl00uJ9VFKxQ"
);

// - App config
const app = express();

// - Middleares
app.use(cors({ origin: true }));
//send data and parse json data
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("Hello There"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request receieved Boom!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-a38c4/us-central1/api
//http://localhost:4000
//http://localhost:4000/functions //uI
