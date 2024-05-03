import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });
    mongoose.connection.on("error", (error) => {
      console.error("Database after connection error ", error);
    });
    await mongoose.connect(config.DB);
  } catch (error) {
    console.error("Database connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
