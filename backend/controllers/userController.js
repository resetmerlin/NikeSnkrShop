import asyncHandler from "express-async-handler";
import cyberUserModel from "../models/userModel.js";

// @desc Auth user & get token
// @route POST/api/products
// @access  Public
const authenticationUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.send({ email, password });
  //access that data from requestor body
});

export { authenticationUser };
