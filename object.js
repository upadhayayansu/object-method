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
