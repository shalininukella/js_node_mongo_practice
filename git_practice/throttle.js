function throttle(func, limit){
    let lastCall = 0;
    return function(...args){
        const now = new Date();
        if(now - lastCall >=limit){
            lastCall = now;
            func.apply(this, args);
        }
    }
}


const throttledLog = throttle(() => console.log('Hey'), 2000);

// Simulate repeated calls every 500ms
let i = 0;
const interval = setInterval(() => {
    throttledLog(); // Will log 'Hey' only once every 3 seconds
    i++;
    if (i === 10) clearInterval(interval);
}, 500);





// function throttle(func, limit){
//     let lastCall = 0;
//     return function(...args){
//         let now = new Date();
//         if(now - lastCall >= limit){
//             lastCall = now;
//             func.apply(this, args);
//         }
//     }
// }