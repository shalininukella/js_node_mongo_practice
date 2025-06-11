//The module pattern is used to encapsulate logic and hide implementation details. 
// It helps to organize code into reusable pieces.
// Module Pattern

let moduleCal = (function () {
  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  return {
    add,
    sub,
  };
})();

console.log(moduleCal.add(2, 3));
