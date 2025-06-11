//call
function greet(x, y) {
  sum = x + y;
  console.log(this.name + " sum" + " " + sum);
}

const user = {
  name: "shalini",
};
let arr = [23, 1];

greet.call(user, ...arr);
