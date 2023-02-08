import express from "express";
const router = express.Router();
import { protection } from "../middleware/authMiddleware.js";
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
router.route("/").post(protection, addOrderItems);
router.route("/:id").get(protection, getOrderById);

export default router;
