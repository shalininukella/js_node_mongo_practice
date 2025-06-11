//function composition - combining 2 or more functions to form a new function all together = compose(f,g)(x) is similar to f(g(x))
const addOne = (x) => x+1;
const doubling = (x) => x*2;
const squared = (x) => x*x

//compose them 
function compose(f, g){
  return function (x){
    return f(g(x));
  }
}

const addOneThenDouble = compose(doubling, addOne);
console.log('composition');
console.log(addOneThenDouble(3));


//How would you implement a compose function that works with any number of functions?
function composeAny(...fns){
    return function(x){
         return fns.reduceRight((acc, fn) => fn(acc), x);
    }
}

const addThenDoubleTheSquare = composeAny(squared, doubling, addOne);
console.log('composition of many functions using reduceRight');
console.log(addThenDoubleTheSquare(4));


//pipe = left to right
function pipe(...fns){
    return function(x){
        return fns.reduce((acc, fn) => fn(acc), x);
    }
}
const pipingFromLeftToRight = pipe(squared, doubling, addOne);
console.log('composition of many functions using reduce called pipe');
console.log(pipingFromLeftToRight(4));