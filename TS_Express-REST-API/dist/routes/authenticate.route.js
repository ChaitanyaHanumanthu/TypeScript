"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mini application which is router
const express_1 = require("express");
const express_2 = __importDefault(require("express"));
// creating mini application using router()
const userApp = (0, express_1.Router)();
// Importing the controllers from controller
const authenticate_controller_1 = require("../controllers/authenticate.controller");
const verifytoken_1 = require("../middlewares/verifytoken");
// body parser
userApp.use(express_2.default.json());
userApp.post("/register", authenticate_controller_1.register);
userApp.get("/user/:name", verifytoken_1.verifyToken, authenticate_controller_1.getUserById);
userApp.post("/login", authenticate_controller_1.login);
userApp.put("/modify-user/:name", authenticate_controller_1.modifyUser);
userApp.delete("/delete-user/:name", verifytoken_1.verifyToken, authenticate_controller_1.deleteUser);
// exporting the mini app
exports.default = userApp;
