// import mini application which is router
import { IRouter, Router } from "express";

import express from "express";

// creating mini application using router()
const userApp: IRouter = Router();

// Importing the controllers from controller
import { register } from "../controllers/authenticate.controller";

// body parser
userApp.use(express.json());

userApp.post("/register", register);

// testApp.post("/login", login);

// testApp.get("/user/:username", userById);

// testApp.put("/user/:username", modifyUser);

// testApp.delete("user/:username", deleteUser);

// exporting the mini app
export default userApp;
