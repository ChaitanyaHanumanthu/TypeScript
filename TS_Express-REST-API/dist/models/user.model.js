"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const db_config_1 = __importDefault(require("../databases/db.config"));
const sequelize_1 = require("sequelize");
exports.Users = db_config_1.default.define("users", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    freezeTableName: true,
});
