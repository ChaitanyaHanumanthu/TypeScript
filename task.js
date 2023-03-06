"use strict";
// Implement Student interface with a class and add a method to return rollno and street of a student
exports.__esModule = true;
var complex_interfaces_1 = require("./complex_interfaces");
console.log(complex_interfaces_1.std1);
var one = /** @class */ (function () {
    function one(rollno, name, address) {
        this.rollno = rollno;
        this.name = name;
        this.address = address;
    }
    one.prototype.getStreet = function () {
        console.log("Roll number is: ", this.rollno, "\nstreet of the roll number is", this.address.street);
    };
    return one;
}());
// let std1 = new one("909", "Chaitanya", { city: "sklm", street: "main" });
// console.log(std1.getStreet());
