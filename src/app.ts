import Express, { NextFunction, Request, Response, request } from "express";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import userRouter from "./user/userRouter";

const app = Express();

app.use(Express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/users", userRouter);

// global error handler

app.use(globalErrorHandler);

export default app;
