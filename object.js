let person = {
  firstName: "ram",
  lastName: "magar",
  sayHello() {
    console.log("hello !!");
  },
};
person.age = 25;
//person.sayHello = function () {
//  console.log("Hello");
//};

function greet() {
  console.log("hello!");
}
person.sayHello = greet;

person.sayHello();

const person = {
  id: 12,
  username: "ansu",
  age: 20,
  hobbies: ["coding"],
  active: true,
};
const keys = object.keys(person);
console.log(keys);
