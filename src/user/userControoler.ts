import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const rgister = (req: Request, res: Response, next: NextFunction) => {
  // validation
  console.log(req.body);

  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    const error = createHttpError(400, "All fields are required");
    next(error);
  }
  // process

  // response
  res.json({
    message: "Hello World!",
  });
};
export { rgister };
