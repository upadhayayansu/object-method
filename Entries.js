const person = {
  id: 12,
  username: "ansu",
  age: 20,
  hobbies: ["coding"],
  active: true,
};

const entries = object.entries(person);
for (const [key, value] of entries) {
  console.log(key);
  console.log(value);
}
