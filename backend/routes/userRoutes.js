import express from "express";
const router = express.Router();
import { protection } from "../middleware/authMiddleware.js";
import {
  authenticationUser,
  getClientProfile,
  registerUser,
} from "../controllers/userController.js";

router.route("/login").post(authenticationUser);
router.route("/profile").get(protection, getClientProfile);
router.route("/register").post(registerUser);

export default router;
