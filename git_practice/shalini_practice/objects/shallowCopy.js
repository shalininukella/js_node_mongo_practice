//using spread operators 

const obj = {
    name : 'ram',
    age : 20,
    obj2 : {
        gender : "male",
    }
}
const obj3 = {...obj};
console.log(obj3);

//Objec.assign()
const obj4 = Object.assign({}, obj);
console.log(obj4);

//array methods like slice
const arr = [{id:1}, {id:2}];
const obj5 = arr.slice();
console.log(obj5);


//creates a new array - arr.concat
const obj6 = arr.concat([]);
console.log(obj6);

