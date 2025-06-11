let a = [1, 2, 3, 4, 5];
let sum = a.reduce((acc, num) => acc + num, 0);
console.log(sum);

let c = ['a', 'b', 'c'];
let rightSum = c.reduceRight((acc, curr) => acc+curr, '');
console.log(rightSum);

const newMap = a.map((curr) => curr*2);
console.log(newMap);

const newFilter = newMap.filter((cur) => cur%4 === 0);
console.log(newFilter);


//flat
let notFlat = [1,2,[3,4,[5,6]]];
let flat2 = notFlat.flat(2);
let flat1 = notFlat.flat(1);
console.log(flat2);
console.log(flat1);
console.log(notFlat);

//slice - non mutating 
let newArr = a.slice(1, 4);
console.log(newArr);


//splice = mutating
let goodArr = [3,4,5,6,7,8];
//delete
let removed = goodArr.splice(1,2);
console.log(goodArr);
console.log(removed);

let good2 = [3,4,5,6,7,8];
//insert

good2.splice(1,0, 45);
console.log(good2);


let good = [3,4,5,6,7,8];
//replace 
good.splice(1, 2, 1,2);
console.log(good);