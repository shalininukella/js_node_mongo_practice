// function greet(name, callback) {
//     console.log("Hi " + name);
//     callback();
//   }
  
//   function sayBye() {
//     console.log("Goodbye!");
//   }
  
//   greet("Shalini", sayBye);
  

function sayHi(){
  console.log('hi');
}

function greet(name, callback){
  console.log("greetings" + name);
  callback();
}

greet('shallini', sayHi);