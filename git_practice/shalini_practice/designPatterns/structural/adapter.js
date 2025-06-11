//incompatible interfaces to interact with each other
const oldCal = {
    add : (a,b) => a+b,
    mul : (a,b) => a*b
}


//client expect this 
// const newCal = {
//     sum : (a,b) => a+b,
//     multi : (a,b) => a*b
// }

const adapter = {
    sum : (a,b) => oldCal.add(a,b),
    multi : (a,b) => oldCal.mul(a,b)
}

console.log(adapter.sum(12, 2));

