import express from "express";
import { isAuthenticated } from "../middlewares/Auth.js";
import {
  buySubscription,
  cancelSubscription,
  getRazorpayKey,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

// Buy Subscriptions
router.route("/subscribe").get(isAuthenticated, buySubscription);

// Payment Verifications
router.route("/paymentVerification").post(isAuthenticated, paymentVerification);

//  Get Razorpay Key
router.route("/razorPayKey").get(getRazorpayKey);

// Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
