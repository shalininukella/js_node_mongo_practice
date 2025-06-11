// // Observer Pattern
// //The observer pattern allows an object (subject) to notify other objects (observers) of changes in its state.

// Observer Pattern
// What it is: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.

// Simple explanation: "It's like subscribing to a YouTube channel. When a new video is uploaded, all subscribers get notified."



// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(fn) {
//     this.observers.push(fn);
//   }

//   notify(data) {
//     this.observers.forEach(fn => fn(data));
//   }
// }

// const sub = new Subject();
// sub.subscribe((data) => console.log("Observer 1:", data));
// sub.subscribe((data) => console.log("Observer 2:", data));

// sub.notify(5);
// // Output: Observer 1: 5
// //         Observer 2: 5

class Observer {
  constructor(){
    this.observers = [];
  }

  subscribe(fn){
    this.observers.push(fn);
  }

  notify(data){
    this.observers.forEach(fn => fn(data));
  }
}

const obs = new Observer();
obs.subscribe((data) => console.log('ob1', data));
obs.subscribe((data) => console.log('ob2', data));

obs.notify(3);