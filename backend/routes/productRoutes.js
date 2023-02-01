import express from "express";
const router = express.Router();

import {
  getProductById,
  getProducts,
} from "../controllers/cyberProductControllers.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
