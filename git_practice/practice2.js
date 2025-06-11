

// onmessage = (event) => {
//     console.log('worker recieved task');
//     const result = event.data();
//     postMessage(result);

// }


// function getLocation(){
//     if(!navigator.geolocation){
//         console.log('Browser do not support');
//     }
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             const {latitude, longitude} = position.coords;
//             console.log(latitude,longitude);
//         },
//         (error) => {
//             console.log(error);
//         }
//     )
// }


// const obj = {
//     name: 'Niha',
//     name2: 'Pareeek',
//     name3: 'Nish'
// }
// const {name,name2,name3} = obj;
// console.log(name);


const obj = {
  hey: 'Hii',
  hii: 'Hemlo'
}


const {hey, hii} = obj;
console.log(hey);

// function debounc(fn, delay){
//     let timer = 0;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this,args);
//         }, 100);
//     }
// }

// Define a custom prototype function for Array
Array.prototype.sayHello = function () {
    console.log("Hello from your array:", this);
  };
  
  // Create an array
  const myArray = [1, 2, 3];
  
  // Call the custom function
  myArray.sayHello();
  
// const person2 = {
//     name: 'Alice',
//     greet: function(city,country){
//         console.log(`Name: ${this.name}, ${city}, ${country}`);
//     }
// };

// const anotherperson2 = {
//     name: "Bob"
// };

// person2.greet('New York', 'USA');
// person2.greet.call(anotherperson2, 'New York', 'USA' );
// person2.greet.apply(anotherperson2, ['New York', 'USA']);
// const newfunc = person2.greet.bind(anotherperson2, 'New York', 'USA');
// newfunc();




// const person = {
//     name: "Alice",
//     greet: function (city, country) {
//         console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
//     }
// };

// const anotherPerson = { name: "Bob" };

// // 1️⃣ call(): invoke immediately, pass arguments individually
// person.greet.call(anotherPerson, "New York", "USA");  
// // Output: "Hi, I'm Bob from New York, USA"

// // 2️⃣ apply(): invoke immediately, pass arguments as an array
// person.greet.apply(anotherPerson, ["Paris", "France"]);  
// // Output: "Hi, I'm Bob from Paris, France"

// // 3️⃣ bind(): create a new function with "this" fixed to anotherPerson
// const boundGreet = person.greet.bind(anotherPerson, "Tokyo", "Japan");  
// boundGreet();  
// // Output: "Hi, I'm Bob from Tokyo, Japan"
