//bind
function greet(x, y, z) {
  console.log(this.name + " " + x + " " + y + " " + z);
}

const user = {
  name: "shalini",
};

let arr = [1, 2, 3, 4];
let bounded = greet.bind(user);
console.log(bounded(...arr));
