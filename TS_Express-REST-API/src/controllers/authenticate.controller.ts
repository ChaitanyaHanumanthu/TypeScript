import { Request, Response } from "express";

import expressAsyncHandler from "express-async-handler";

import sequelize from "../databases/db.config";
import { Users } from "../models/user.model";

export const register = expressAsyncHandler(
  async (req: Request, res: Response) => {
    let create = await Users.create(req.body);
    res.send({ message: "user created" });
  }
);
