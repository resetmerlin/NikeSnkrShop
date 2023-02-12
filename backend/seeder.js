import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import cyberUsersData from "./data/cyberUsers.js";
import cyberProducts from "./data/cyberProducts.js";
import User from "./models/userModel.js";
import cyberProductModel from "./models/productModel.js";
import cyberOrderModel from "./models/orderModel.js";
import connectDatabase from "./config/database.js";

dotenv.config();

connectDatabase();

const importDataFile = async () => {
  try {
    await cyberOrderModel.deleteMany();
    await cyberProductModel.deleteMany();
    await User.deleteMany();

    const createdCyberUsers = await User.insertMany(cyberUsersData);

    const cyberAdmin = createdCyberUsers[0]._id;
    // const cyberAdminEmail = createdCyberUsers[0].email;

    const cyberSampleProducts = cyberProducts.map((cyberProductModel) => {
      return {
        ...cyberProductModel,
        user: cyberAdmin,
        // email: cyberAdminEmail,
      };
    });
    await cyberProductModel.insertMany(cyberSampleProducts);
    console.log(`Data imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyDataFile = async () => {
  try {
    await cyberOrderModel.deleteMany();
    await cyberProductModel.deleteMany();
    await User.deleteMany();

    console.log(`Data destroyed`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyDataFile();
} else {
  importDataFile();
}
