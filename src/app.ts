import Express, { NextFunction, Request, Response, request } from "express";
import globalErrorHandler from "./middlewares/globalErrorhandler";

const app = Express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handler

app.use(globalErrorHandler);

export default app;
