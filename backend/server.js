import express from "express";
//require는 NodeJS에서 사용되고 있는 CommonJS 키워드
import colors from "colors";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddlewar.js";
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());
//this allow us to accept json data in the body
app.get("/", (req, res) => {
  res.send("APi is running");
});

app.get("/snkrs", (req, res) => {});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
//not found handler
app.use(notFound);
//error middleware
app.use(errorHandler);
const PORT = process.env.PORT || 5050;

//listen() method creates a listener on the specified port or path.
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .underline.bold
  )
);
