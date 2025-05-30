import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  userOrders,
  allOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/userAuth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//User features
orderRouter.post("/userorders", authUser, userOrders);

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe);

export default orderRouter;
