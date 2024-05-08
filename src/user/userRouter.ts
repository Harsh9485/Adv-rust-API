import { Router } from "express";
import { rgister } from "./userControoler";

const userRouter = Router();

// routes
userRouter.route("/register").post(rgister);

export default userRouter;
