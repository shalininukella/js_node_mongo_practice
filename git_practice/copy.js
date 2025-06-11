// const obj2 = {a: 100, b: {c:200}};
// const obj1 = Object.assign({},obj2);
// obj1.b.c = 400;

// console.log(obj2);
// console.log(obj1);


// const obj3 = JSON.parse(JSON.stringify(obj2));

// obj3.a = 500;
// obj3.b.c =900;
// console.log(obj3);
// console.log(obj2);


// const obj5 = structuredClone(obj2);
// obj5.b.c = 1000;
// console.log(obj2);
// console.log(obj5);


// shallow copy array
    const num = [1,2,3,4,[5,7]];
    const newNum = num.slice()
    console.log(newNum)
const nyaa = [...num]
// const nyaaa = num.map(item => item)
console.log(nyaa);
