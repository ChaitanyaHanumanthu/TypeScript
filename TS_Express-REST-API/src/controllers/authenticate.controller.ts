import { Request, Response } from "express";

import expressAsyncHandler from "express-async-handler";

import sequelize from "../databases/db.config";
import { Users } from "../models/user.model";

// controller for creating user

import bcryptjs from "bcryptjs";

// importing json web token
import jwt from "jsonwebtoken";
import { where } from "sequelize";

// register an user

export const register = expressAsyncHandler(
  async (req: Request, res: Response) => {
    let { name, email, password } = req.body;

    let hashedPed = await bcryptjs.hash(password, 5);
    password = hashedPed;

    let create = await Users.create({
      name: name,
      email: email,
      password: password,
    });
    res.send({ message: "user created" });
  }
);

// controller for loggin user
export const login = expressAsyncHandler(
  async (req: Request, res: Response) => {
    let { name, email, password } = req.body;
    let findUser = await Users.findOne({ where: { email: email } });
    if (
      findUser != undefined &&
      (await bcryptjs.compare(password, findUser.dataValues.password))
    ) {
      let signedToken = jwt.sign(
        { name: findUser.dataValues.name },
        process.env.secret_key || "MrZer9",
        { expiresIn: "1h" }
      );
      res.send({ message: `Welcome back ${name}`, payload: signedToken });
    } else if (findUser == undefined) {
      res.send({ message: "No such user existed" });
    } else {
      res.send({ message: "Wrong password" });
    }
  }
);

//  controller for getting user by email
export const getUserById = expressAsyncHandler(
  async (req: Request, res: Response) => {
    let username = req.params.name;
    let findUser = await Users.findOne({
      where: {
        name: username,
      },
    });
    if (findUser != undefined && findUser.dataValues.status == true) {
      res.send({ message: "User existed", userData: findUser });
    } else {
      res.send({ message: "no such user existed" });
    }
  }
);

// controller for update the user data
export const modifyUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    let username = req.params.name;
    let { name, email, password } = req.body;
    let findUser = await Users.findOne({
      where: {
        name: username,
      },
    });
    let hashedPwd = await bcryptjs.hash(password, 6);
    password = hashedPwd;
    if (findUser != undefined) {
      let update = await Users.update(
        { name: name, email: email, password: password },
        {
          where: {
            email: req.body.email,
          },
        }
      );
      res.send({
        message: `${name} details updated successfully`,
        payload: findUser,
      });
    } else {
      res.send({ message: "No user to modify the data" });
    }
  }
);

// delete user

export const deleteUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    let username = req.params.name;

    let findUser = await Users.findOne({
      where: {
        name: username,
      },
    });

    if (findUser != undefined) {
      let deleteUser = await Users.update(
        { status: false },
        { where: { name: username } }
      );
      res.send({ message: " deleted succesfully" });
    } else {
      res.send({ message: "No such user to delete" });
    }
  }
);


