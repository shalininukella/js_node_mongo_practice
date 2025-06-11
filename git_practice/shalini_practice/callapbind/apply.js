// apply

function greet(...args) {
  console.log(this.name + " " + args);
}

const user = {
  name: "shalini",
};
let arr = [1, 2, 3,4];
greet.apply(user, arr);
