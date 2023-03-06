"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const person_class_1 = require("./person.class");
class Employee extends person_class_1.Person {
    constructor(name, age, emp_id, designation) {
        super(name, age);
        this.emp_id = emp_id;
        this.designation = designation;
    }
    getEmployee() {
        console.log("From Employee");
    }
}
exports.Employee = Employee;
