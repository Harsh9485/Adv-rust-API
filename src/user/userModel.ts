import mongoose from "mongoose";
import { userSchemaInterface } from "./userTypes";

const userSchema = new mongoose.Schema<userSchemaInterface>({
  name: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
});

const User = mongoose.model<userSchemaInterface>("User", userSchema);

export default User;
