// Abstract class (using convention, as JS doesn't have native abstract classes)
class Calculator {
  constructor() {
    if (this.constructor === Calculator) {
      throw new Error("Calculator is abstract and cannot be instantiated directly");
    }
  }
  
  // Abstract method
  calculate(x, y) {
    throw new Error("Method 'calculate' must be implemented");
  }
  
  // Concrete method that uses the abstract method
  performCalculation(x, y) {
    // Input validation
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error("Both arguments must be numbers");
    }
    
    // Use the implemented calculate method
    return this.calculate(x, y);
  }
}

class Adder extends Calculator {
  calculate(x, y) {
    return x + y;
  }
}

class Multiplier extends Calculator {
  calculate(x, y) {
    return x * y;
  }
}

// Usage
const adder = new Adder();
console.log(adder.performCalculation(5, 3)); // 8

const multiplier = new Multiplier();
console.log(multiplier.performCalculation(5, 3)); // 15

// const calc = new Calculator(); // Error: Calculator is abstract