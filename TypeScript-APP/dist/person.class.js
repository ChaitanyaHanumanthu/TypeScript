"use strict";
// Implement the following relationship.
// Person------Student
//             ------Employee
//             ----- Businessman
// where Person class can have all common properties and Employee,Student & Businessman contain their specific properties.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// class person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("person name: ", this.name, "person age: ", this.age);
    }
    // Method for the class person
    getPerson() {
        console.log("Person is executed");
    }
}
exports.Person = Person;
