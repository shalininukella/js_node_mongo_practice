// //using Object.create
// let animal = {
//   eats() {
//     console.log("animal ate");
//   },
// };

// const baby = Object.create(animal);
// console.log(baby.eats());


// //using constructor function
// function Calculator() {}
// Calculator.prototype.add = function (a, b) {
//   return a + b;
// };

// const cal = new Calculator(2, 3);
// console.log(cal.add(2, 4));



// //using proto
// const obj1 = {
//   name: "shalini",
//   age: 20,
// };

// const obj2 = {
//   __proto__: obj1,
//   hair: "black",
// };

// console.log(obj2.name);

//class
// class Animal {
//   constructor(name){
//     this.name = name;
//   }

//   outName(){
//     console.log(this.name);
//   }
// }

// const dog = new Animal("bobo");
// dog.outName();


// const obj = {
//   name: 'shalini',
//   age: 20
// }

// const obj2 = Object.create(obj);
// console.log(obj2.name);
// console.log(obj2.age);

//COnatructor function 

function Person (name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function(){
  console.log(this.name);
  console.log(this.age);
}

const shalini = new Person('shalin', 21);
shalini.greet();

