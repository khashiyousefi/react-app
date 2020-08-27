import { Person } from "./person";
import Teacher, { promot } from "./teacher";

const person = {
  name: "kash",
  walk: function () {},
  talk() {
    console.log(this);
  },
};
person.talk();
const talkName = person.talk.bind(person);
talkName();

const dude = new Person("mike");
console.log(dude);

const teacher = new Teacher("Ms.Lee", "MCs");
console.log(teacher);

const square = (number) => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

jobs.filter((jobs) => jobs.isActive);

const newPerson = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};
newPerson.talk();

const colors = ["red", "blue", "green"];
const items = colors.map((color) => "<li>" + color + "</li>");
const altItems = colors.map((color) => `<li>${color}</li>`); //Templ.Literal
console.log(items);

const address = {
  street: "",
  city: "",
  country: "",
};
const { street: st, city } = address; //Object Dustructring

const first = { name: "kash" };

const combine = { ...address, ...first }; //SpreadOperator
console.log(combine);
