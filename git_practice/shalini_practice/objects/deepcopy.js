//structuredClone

const obj = {
    name: 'ram',
    age:20,
    obj1 : {
        gender : "male",
        obj2 : {
            city:"hyd",
        }
    }
}

const structured = structuredClone(obj);

//using json stringify
const stringy = JSON.parse(JSON.stringify(obj));

//using lodash 
const _ = require('lodash');
const lod = _.cloneDeep(obj);

console.log(structured);
console.log(stringy);
console.log(lod);

