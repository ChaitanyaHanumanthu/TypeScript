"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing the express module and application type
const express_1 = __importDefault(require("express"));
// calling the express application
const app = (0, express_1.default)();
// importing dotenv config
const dotenv = __importStar(require("dotenv"));
const authenticate_route_1 = __importDefault(require("./routes/authenticate.route"));
dotenv.config({ path: "../.env" });
// assigning the port number
const port = process.env.port;
// checking whether the server is working or not
app.listen(port, () => console.log("Port initiated at 4000"));
// importing the test routes
app.use("/user-api", authenticate_route_1.default);
// importing sequelize from db config
const db_config_1 = __importDefault(require("./databases/db.config"));
// checking the sequelize connection with databases
db_config_1.default
    .authenticate()
    .then(() => {
    console.log("Connection established successfully");
})
    .catch((err) => {
    console.log("Error at db connection", err);
});
db_config_1.default.sync({ force: true });
// body parser
app.use(express_1.default.json());
// error handlers
app.use((err, req, res, next) => {
    res.send({ message: err });
});
// invalid path
app.use("*", (req, res, next) => {
    res.send({ message: "Invalid path" });
});
