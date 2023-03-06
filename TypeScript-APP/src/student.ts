import { Person } from "./person.class";

export class Student extends Person {
  constructor(
    name: string,
    age: number,
    private section: string | number,
    private roll_no: number
  ) {
    super(name, age);
  }

  getStudent() {
    console.log("From student");
  }
}
