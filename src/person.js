//Person Class
export class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(this);
  }
  walk() {
    console.log("walk");
  }
}
