// import mini application which is router
import { IRouter, Router } from "express";

import express from "express";

// creating mini application using router()
const userApp: IRouter = Router();

// Importing the controllers from controller
import {
  deleteUser,
  getUserById,
  login,
  modifyUser,
  register,
} from "../controllers/authenticate.controller";
import { verifyToken } from "../middlewares/verifytoken";

// body parser
userApp.use(express.json());

userApp.post("/register", register);

userApp.get("/user/:name", verifyToken, getUserById);

userApp.post("/login", login);

userApp.put("/modify-user/:name", modifyUser);

userApp.delete("/delete-user/:name", verifyToken, deleteUser);

// exporting the mini app
export default userApp;
