import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  mongoose.connect(config.DB);
};
