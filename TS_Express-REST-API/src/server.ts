// Importing the express module and application type
import express, { Application, NextFunction, Errback } from "express";

// importing request and responsne from express
import { Request, Response } from "express";

// calling the express application
const app: Application = express();

// importing dotenv config
import * as dotenv from "dotenv";
import userApp from "./routes/authenticate.route";
dotenv.config({ path: "../.env" });

// assigning the port number
const port = process.env.port;

// checking whether the server is working or not
app.listen(port, () => console.log("Port initiated at 4000"));

// importing the test routes
app.use("/user-api", userApp);

// importing sequelize from db config

import sequelize from "./databases/db.config";

// checking the sequelize connection with databases
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully");
  })
  .catch((err) => {
    console.log("Error at db connection", err);
  });
sequelize.sync({ force: true });

// body parser
app.use(express.json());

// error handlers
app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  res.send({ message: err });
});

// invalid path
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Invalid path" });
});
