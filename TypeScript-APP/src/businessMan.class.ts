import { Address } from "./addreess.class";
import { Person } from "./person.class";

export class businessMan extends Person {
  constructor(
    name: string,
    age: number,
    private owner_id: string | number,
    private businessName: string,
    private adr: Address
  ) {
    super(name, age);
  }

  getBusiness() {
    console.log("From business emp");
  }
}
