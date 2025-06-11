// function throttle(func, limit) {
//   let lastCall = 0;
//   return function (...args) {
//     let now = Date.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }

// let callingFunction = throttle(() => alert("hey"), 3000);
// document.getElementById("btn").addEventListener("click", callingFunction);


function throttle(func, limit){
  let flag = false;
  return function(...args){
    if(!flag){
      func.apply(this, args);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, limit);
    }
  }
}

const newFunc = throttle(() => {console.log('hi')}, 2000);
newFunc();
setTimeout(() => {newFunc();},3000)
