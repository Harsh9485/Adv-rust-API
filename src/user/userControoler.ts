import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import User from "./userModel";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const rgister = async (req: Request, res: Response, next: NextFunction) => {
  // validation
  console.log(req.body);

  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    const error = createHttpError(400, "All fields are required");
    next(error);
  }
  // DB validation
  const userAllredy = await User.findOne({ email });
  if (userAllredy) {
    const error = createHttpError(400, "User already exists");
    next(error);
  }
  // store in DB

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  // create jWt token
  const token = sign({ sub: user._id }, config.JWTSECRET as string, {
    expiresIn: "7d",
  });

  // response
  res.json({
    AccessToken: token,
  });
};
export { rgister };
