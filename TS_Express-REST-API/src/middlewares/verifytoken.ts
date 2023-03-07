import jwt from "jsonwebtoken";

import express, { Request, Response, NextFunction } from "express";

import * as dotenv from "dotenv";
import expressAsyncHandler from "express-async-handler";

export const verifyToken = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let bearerToken = req.headers.authorization;
    if (bearerToken == undefined) {
      res.send({ message: "unauthorized user" });
    } else {
      let token = bearerToken.split(" ")[1];
      try {
        let status = jwt.verify(token, process.env.secret_key || "MrZer9");
        next();
      } catch (err) {
        res.send({ message: "Relogin again" });
      }
    }
  }
);
