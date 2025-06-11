//pure function
function mul(a, b) {
  return a * b;
}
console.log(mul(2, 4));

//impure functions
let x = 2;
function impure(y) {
  x = x + y;
  return x;
}

console.log(impure(3));
console.log(impure(4));

//higher order function - take or return a function

//built-in function - map
const doubleHigher = (x) => x * 2;
const arr = [1, 2, 3];
const doubledArr = arr.map((x) => x * 2);
console.log(doubledArr);

// or
const doubledArr1 = arr.map(doubleHigher);
console.log(doubledArr1);

//custom
function greet(name) {
  return "hey" + name;
}

function higherOrder(greetFunc, userName) {
  return greetFunc(userName);
}

console.log(higherOrder(greet, "Shalini"));

//immutability - not changing the original data, instead create new ones
const array1 = [2, 3, 4];
//mutable - bad
array1.push(9);

const array3 = [12, 3, 45];
const array2 = [...array3, 6];

//immutable
console.log(array1, array2, array3);

//side effect - changing the state of of something outside of the fucntion's scope
let z = 12;
function increment() {
  return z++;
}
increment();
console.log(z);


//flex, grid, navbar, media queries, position, sticky, 