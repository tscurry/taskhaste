const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const env = require("dotenv").config({ path: "../.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(process.env.STATIC_DIR, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.env.STATIC_DIR, "public", "index.html"));
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-setup-intent", async (req, res) => {
  try {
    const setupIntent = await stripe.setupIntents.create({ usage: "on_session" });
    res.json({ clientSecret: setupIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/create-payment-method", async (req, res) => {
  const { methodId } = req.body;

  try {
    //create a stripe id for current user
    // const addUser = await stripe.customers.create({
    //   email: "email@email.com",
    // });
    const paymentMethod = await stripe.paymentMethods.attach(methodId, { customer: "cus_OJoxPZwMocKxTC" });

    res.status(200).json({ success: true, paymentMethod });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/get-payment-methods", async (req, res) => {
  try {
    const paymentMethods = await stripe.customers.listPaymentMethods("cus_OJoxPZwMocKxTC", { type: "card" });
    res.json(paymentMethods);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/delete-payment-method", async (req, res) => {
  try {
    const { methodId } = req.body;

    const deletedMethod = await stripe.paymentMethods.detach(methodId);
    res.status(200).json({ success: true, message: "Payment method detached successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.listen(4242, () => console.log("Node server listening at http://localhost:4242"));
