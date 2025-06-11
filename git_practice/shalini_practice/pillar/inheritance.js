class Animal {
  speak() {
    return "Animal speaks";
  }
}

class Dog extends Animal {
  bark() {
    return "Dog barks";
  }
}

const dog = new Dog();
console.log(dog.speak()); // Animal speaks
console.log(dog.bark());  // Dog barks
