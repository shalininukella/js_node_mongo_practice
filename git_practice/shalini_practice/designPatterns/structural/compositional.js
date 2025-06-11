class Leaf {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

class Composite {
  constructor() {
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  getValue() {
    return this.children.map(c => c.getValue()).join(", ");
  }
}

const leaf1 = new Leaf(1);
const leaf2 = new Leaf(2);
const group = new Composite();
group.add(leaf1);
group.add(leaf2);

console.log(group.getValue()); // "1, 2"
