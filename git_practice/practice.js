// console.log("start");


// setTimeout(() => {
//     console.log("a");
// }, (0));


// for(let i = 0; i < 1e9; i++) {}


// Promise.resolve().then(() => console.log("b"))


// console.log("end")


// const fetchData = () =>{

// }

// const multiply = (a,b) => a*b;

// (function (){
//     console.log('hey');
// })();

for(var x = 0; x < 3; x++){
    setTimeout(() => {
        console.log(x)
    }, 1000);
}



for(let y = 0; y < 3; y++){
    setTimeout(() => {
        console.log(y)
    }, 1000);
}



function debunce(fn, delay){
    let timer = null;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
                fn.apply(this, args)
        }, delay);
    }
}


function debounce(fn, delay){
    let timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}


// function throtle(fn, delay){
//     let lastCall = 0;
//     return function(...args){
//         const now = Date.now()
//         if(lastCall - now >= delay){
//             fn.apply(this, args)
//             lastCall =  now
//         }
//     }
// }

function throtle(fn, delay){
    let lastCall = 0;
    return function(...args){
        const now = Date.now()
        if(lastCall - now >= delay){
            fn.apply(this,args)
            lastCall = now
        }
    }
}



// document.getElementById("id").addEventListener("click", (event) => {
//     if(event.target.tagName == "LI"){

//     }
// })




// const obj = {a : 2 , b : {c : 3}}

// const objCopy = {...obj}

// const copy = JSON.parse(JSON.stringify(obj))



// const person = {
//     name : "amit"
// }


// function greet(){
//     console.log(this.name)
// }


// greet.call(person);

// greet.apply(person)

// const greeperson = greet.bind(person)

// greeperson()









// const obj1 = {
//     name: 'Niha'

// }
// function greet(){
//     console.log(this.name);
// }

// greet.call(obj1);
// greet.apply(obj1);
// const greeeee = greet.bind(obj1);
// greeeee();



const barista ={
    name:"Alex",
    makeCoffee(order){
        console.log(`${this.name} is making the ${order}`);
    }
};
const waiter  = {
    name: "Jordan"
}

barista.makeCoffee.call(waiter, "lattee");
barista.makeCoffee.apply(waiter, ["mocha"]);
const makeTea = barista.makeCoffee.bind(waiter, 'Tea');
makeTea();
