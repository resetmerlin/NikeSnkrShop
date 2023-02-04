import jwt from "jsonwebtoken";
import process from "process";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default createToken;
