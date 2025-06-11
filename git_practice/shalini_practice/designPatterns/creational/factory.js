//A factory pattern is used to create objects without specifying the exact class
//  of object that will be created.

// function factoryCalculator(a, b) {
//   return {
//     add() {
//       return a + b;
//     },
//     sub() {
//       return a - b;
//     },
//   };
// }

// let cal = factoryCalculator(10, 5);
// console.log(cal.add());
// console.log(cal.sub());

// Factory Pattern
// What it is: A pattern that uses a function to create objects without specifying the exact class or constructor.

// Simple explanation: "It's like a factory that produces different products. You ask for what you want, and it creates the right object for you without you needing to know how."


function Factory(type){
  if(type === 'add'){
    return {
      cal : (a,b) => a+b
    }
  }

  if (type === 'mul'){
    return {
      cal : (a,b) => a*b
    }
  }
}

const fact = new Factory('add');
console.log(fact.cal(4,5));

const fact2 = new Factory('mul');
console.log(fact2.cal(5,6));