"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import mini application which is router
const express_1 = require("express");
// creating mini application using router()
const testApp = (0, express_1.Router)();
// Importing the controllers from controller
const test_controller_1 = require("../controllers/test.controller");
// defining the routes
testApp.get("/test", test_controller_1.testController);
// exporting the mini app
exports.default = testApp;
