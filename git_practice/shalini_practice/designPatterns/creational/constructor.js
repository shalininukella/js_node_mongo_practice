//idea is to create a constructor function and initialise 
// the objects with the defalut properties and methods
// function Calculator(a, b) {
//   this.a = a;
//   this.b = b;
// }

// Calculator.prototype.add = function () {
//   return this.a + this.b;
// };

// Calculator.prototype.sub = function () {
//   return this.a - this.b;
// };

// let obj = new Calculator(5, 2);
// console.log(obj.add());
// console.log(obj.sub());


//creaction of object 


// Constructor Pattern
// What it is: A way to create new objects with their own object scope.

// Simple explanation: "It's like a blueprint for creating objects. You define a template with properties and methods, then create multiple objects from it."
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }
}

const calc = new Calculator(2, 3);
console.log(calc.add()); // 5
