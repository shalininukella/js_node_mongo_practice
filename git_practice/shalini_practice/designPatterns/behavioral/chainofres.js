class AddHandler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(a, b, op) {
    if (op === 'add') return a + b;
    return this.next?.handle(a, b, op);
  }
}

class MulHandler {
  handle(a, b, op) {
    if (op === 'mul') return a * b;
    return "Unsupported";
  }
}

const addHandler = new AddHandler();
const mulHandler = new MulHandler();

addHandler.setNext(mulHandler);

console.log(addHandler.handle(2, 3, 'add')); // 5
console.log(addHandler.handle(2, 3, 'mul')); // 6
