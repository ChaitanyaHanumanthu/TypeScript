"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.modifyUser = exports.getUserById = exports.login = exports.register = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = require("../models/user.model");
// controller for creating user
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// importing json web token
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// register an user
exports.register = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, email, password } = req.body;
    let hashedPed = yield bcryptjs_1.default.hash(password, 5);
    password = hashedPed;
    let create = yield user_model_1.Users.create({
        name: name,
        email: email,
        password: password,
    });
    res.send({ message: "user created" });
}));
// controller for loggin user
exports.login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, email, password } = req.body;
    let findUser = yield user_model_1.Users.findOne({ where: { email: email } });
    if (findUser != undefined &&
        (yield bcryptjs_1.default.compare(password, findUser.dataValues.password))) {
        let signedToken = jsonwebtoken_1.default.sign({ name: findUser.dataValues.name }, process.env.secret_key || "MrZer9", { expiresIn: "1h" });
        res.send({ message: `Welcome back ${name}`, payload: signedToken });
    }
    else if (findUser == undefined) {
        res.send({ message: "No such user existed" });
    }
    else {
        res.send({ message: "Wrong password" });
    }
}));
//  controller for getting user by email
exports.getUserById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let username = req.params.name;
    let findUser = yield user_model_1.Users.findOne({
        where: {
            name: username,
        },
    });
    if (findUser != undefined && findUser.dataValues.status == true) {
        res.send({ message: "User existed", userData: findUser });
    }
    else {
        res.send({ message: "no such user existed" });
    }
}));
// controller for update the user data
exports.modifyUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let username = req.params.name;
    let { name, email, password } = req.body;
    let findUser = yield user_model_1.Users.findOne({
        where: {
            name: username,
        },
    });
    let hashedPwd = yield bcryptjs_1.default.hash(password, 6);
    password = hashedPwd;
    if (findUser != undefined) {
        let update = yield user_model_1.Users.update({ name: name, email: email, password: password }, {
            where: {
                email: req.body.email,
            },
        });
        res.send({
            message: `${name} details updated successfully`,
            payload: findUser,
        });
    }
    else {
        res.send({ message: "No user to modify the data" });
    }
}));
// delete user
exports.deleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let username = req.params.name;
    let findUser = yield user_model_1.Users.findOne({
        where: {
            name: username,
        },
    });
    if (findUser != undefined) {
        let deleteUser = yield user_model_1.Users.update({ status: false }, { where: { name: username } });
        res.send({ message: " deleted succesfully" });
    }
    else {
        res.send({ message: "No such user to delete" });
    }
}));
