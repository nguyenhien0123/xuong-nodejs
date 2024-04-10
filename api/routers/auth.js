import express from "express";
import { SignIn, getUser, getUsered, signUp } from "../Controllers/auth.js";

const authRouter = express.Router();
authRouter.post("/signup", signUp);
authRouter.get("/signup", getUser);
authRouter.post("/signin", SignIn);
authRouter.get("/signin", getUsered);
export default authRouter;
