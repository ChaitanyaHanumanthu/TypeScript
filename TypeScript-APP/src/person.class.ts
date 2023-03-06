// Implement the following relationship.
// Person------Student
//             ------Employee
//             ----- Businessman
// where Person class can have all common properties and Employee,Student & Businessman contain their specific properties.

// class person
export class Person { 
  constructor(private name: string, private age: number) {
    console.log("person name: ", this.name, "person age: ", this.age);
  }

  // Method for the class person
  getPerson() {
    console.log("Person is executed");
  }
}
