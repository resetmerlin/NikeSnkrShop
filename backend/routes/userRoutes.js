import express from "express";
const router = express.Router();

import { authenticationUser } from "../controllers/userController.js";

router.route("/login").post(authenticationUser);

export default router;
