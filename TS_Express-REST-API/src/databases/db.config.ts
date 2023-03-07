// Importing sequelize
import { Sequelize } from "sequelize";

// importing dotenv
import * as dotenv from "dotenv";
dotenv.config({
  path: ".../.env",
});

const sequelize = new Sequelize(
  process.env.db_name || "typescriptApi",
  process.env.db_user || "emp583",
  process.env.db_password || "Chaitanya@Wal$",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
