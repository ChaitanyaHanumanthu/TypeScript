"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
let std1 = new student_1.Student("chaitanya", 21, "4f", 909);
const businessMan_class_1 = require("./businessMan.class");
const addreess_class_1 = require("./addreess.class");
let adr = new addreess_class_1.Address("sklm");
let b1 = new businessMan_class_1.businessMan("Chinna", 19, 754, "Seller", adr);
let b2 = new businessMan_class_1.businessMan("Chaitanya", 21, 44, "DEALER", adr);
console.log(b1);
console.log(b2);
