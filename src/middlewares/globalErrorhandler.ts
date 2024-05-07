import { HttpError } from "http-errors";
import { config } from "../config/config";
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode || 500;
  return res.status(statusCode).json({
    Message: err.message,
    ErrorStack: config.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
