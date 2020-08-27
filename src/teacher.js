//Inheritence
//Class Teacher
import { Person } from "./person";

export function promot() {}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
