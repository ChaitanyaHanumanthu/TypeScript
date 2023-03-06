"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessMan = void 0;
const person_class_1 = require("./person.class");
class businessMan extends person_class_1.Person {
    constructor(name, age, owner_id, businessName, adr) {
        super(name, age);
        this.owner_id = owner_id;
        this.businessName = businessName;
        this.adr = adr;
    }
    getBusiness() {
        console.log("From business emp");
    }
}
exports.businessMan = businessMan;
