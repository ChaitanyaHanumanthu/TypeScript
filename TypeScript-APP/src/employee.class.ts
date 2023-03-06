import { Person } from "./person.class";


export class Employee extends Person {
  constructor(
    name: string,
    age: number,
    private emp_id: string | number,
    private designation: string, 

  ) {
    super(name, age);
  }

  getEmployee() {
    console.log("From Employee");
  }
}
