// Implement Student interface with a class and add a method to return rollno and street of a student

import { std1 } from "./complex_interfaces";

console.log(std1);

interface Student {
  rollno: string | number;
  name: string;
  address: {
    city: string;
    street: string;
  };
}

class one implements Student {
  rollno: string | number;
  name: string;
  address: { city: string; street: string };

  constructor(rollno, name, address) {
    this.rollno = rollno;
    this.name = name;
    this.address = address;
  }

  getStreet() {
    console.log(
      "Roll number is: ",
      this.rollno,
      "\nstreet of the roll number is",
      this.address.street
    );
  }
}

// let std1 = new one("909", "Chaitanya", { city: "sklm", street: "main" });

// console.log(std1.getStreet());
