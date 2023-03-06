"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_class_1 = require("./person.class");
class Student extends person_class_1.Person {
    constructor(name, age, section, roll_no) {
        super(name, age);
        this.section = section;
        this.roll_no = roll_no;
    }
    getStudent() {
        console.log("From student");
    }
}
exports.Student = Student;
