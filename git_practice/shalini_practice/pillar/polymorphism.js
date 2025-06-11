class Shape {
  area() {
    return 0;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const square = new Square(3);
const rect = new Rectangle(2, 4);

console.log(square.area()); // 9
console.log(rect.area());   // 8
