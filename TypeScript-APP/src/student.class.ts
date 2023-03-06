import { studentInterface } from "./student.interface";

export class Student implements studentInterface {
  constructor(public roll_no: number, public name: string) {}
}

