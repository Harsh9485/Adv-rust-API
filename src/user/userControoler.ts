import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import User from "./userModel";

const rgister = async (req: Request, res: Response, next: NextFunction) => {
  // validation
  console.log(req.body);

  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    const error = createHttpError(400, "All fields are required");
    next(error);
  }
  // DB validation

  // store in DB

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  // process

  // response
  res.json({
    message: "Hello World!",
  });
};
export { rgister };
