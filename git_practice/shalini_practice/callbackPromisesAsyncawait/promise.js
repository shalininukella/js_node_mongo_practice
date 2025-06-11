//normal
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 2000); // resolves after 2 seconds
});

promise.then((x) => console.log(x)); // will alert "done"

//using fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => console.log(user))
  .catch((err) => console.log(err));


