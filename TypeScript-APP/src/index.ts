import { Student } from "./student";

let std1 = new Student("chaitanya", 21, "4f", 909);

import { businessMan } from "./businessMan.class";
import { Employee } from "./employee.class";

import { Address } from "./addreess.class";
let adr = new Address("sklm");

let b1 = new businessMan("Chinna", 19, 754, "Seller", adr);
let b2 = new businessMan("Chaitanya", 21, 44, "DEALER", adr);

console.log(b1);
console.log(b2);
