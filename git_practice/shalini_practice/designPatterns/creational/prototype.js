// //The prototype pattern is used to create a new object by copying an existing object.
// // Prototype Pattern
  
function Calculator(){
  console.log("it calculates");
}

Calculator.prototype.add = function(a,b){
  return a+b;
}

const adding = new Calculator();
console.log(adding.add(5,8));