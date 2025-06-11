// currying
function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(1)(2));

// Partial Application
// function multiply(a,b){
//     return a*b;
// }
// const multipleBy2 = multiply.bind(null,2);
// console.log(multipleBy2(5));

// constext swicthing
// function a(){
//     console.log('a is called');
//     b();
// }
// function b(){
//     console.log('b');
// }
// a();

// pure function

function add(a, b) {
  return a + b;
}
// console.log(add(4, 5));

// // impure function
// let count = 0;
// function increment(a) {
//   count += a;
//   return count;
// }
// console.log(increment(3));
// console.log(increment(5));
