// let name = "hrk";
// let age = 28;
// let hasHobbies = true;

// const person = {
//   name: "hello",
//   age: 12,
//   detail: () => {
//     return name;
//   },
// };
// console.log(person.detail(person.name));
// console.log(global);
// // arrow function

// const summarizeUser = (userName, userAge, userHasHobby) => {
//   console.log(this); // global
//   return (
//     "Name is " +
//     name +
//     ", age is " +
//     age +
//     ", and the use has hobbies: " +
//     hasHobbies
//   );
// };
// console.log(summarizeUser(name, age, hasHobbies));

//console.log(summarizeUser(name, age, hasHobbies));

// Working with Objects,Properties and Method

const person = {
  name: "Hrk",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

//destructuring;

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;

console.log(name, age);

// const copiedPerson = { ...person }; // pull out data from person calss
// console.log(copiedPerson);
// // array and array methods

// let name = "Neel"; //0x01;

// let name1 = name; //0x02;

// console.log(name1); // Neel

// name = "XYZ";

// console.log(name1);
// console.log(name);

// const hobbies = ["Sports", "Cooking"]; //array and object are pass by reference  // 0x01

// // const hobbie = hobbies;
// // console.log("This is old:" + hobbie);

// // hobbies.push("Programming");
// // console.log("New:" + hobbie);

// // const [hobby1, hobby2] = hobbies;
// // console.log(hobby1, hobby2);
// // for (let hobby of hobbies) {
// //   console.log(hobby);
// // }

// // console.log(hobbies.map((hobby) => "Hobby: " + hobby)); // 0x02
// // console.log(hobbies);
// // hobbies.push("Programming");
// // console.log(hobbies);

// // // spread operator
// // const copiedArray = [...hobbies]; //get copy of array  into new array
// // console.log(copiedArray);

// //copy an element into existing
// const newCerti = ["Java", "Node"];

// const existingCerti = ["Data structure", ...newCerti, "xyz", "abc"];

// console.log(existingCerti);

// // //Rest Operator

// const toArray = (...args) => {
//   return args;
// };
// console.log(toArray(1, 2, 3, 4));
