// literals
const obj1 = {
    namm1: 'Niha'
}

// new object construcro
const newObj = new Object();
newObj.age = 20;


// using object.create
const protoObj = {
    type: 'Human'
}
const person = Object.create(protoObj);
console.log(person.type);
person.age =21;
console.log(person.age);


// creating object using constructor function
function Person1 (name2, age2){
    this.name2 = name2;
    this.age2 = age2;
}
const person1 = new Person1('Niha', 30);
console.log(person1)

// creating object using classes
class Animal{
    constructor(nme, color){
        this.nme = nme;
        this.color = color;
    }
}
const dog = new Animal('Oscar', 'Black')
console.log(dog.hasOwnProperty('color'))
console.log(dog);
console.log('nme' in dog);


// seal and freeze
dog.color = 'red';
dog.bark = 'woho1o';
const sealedDog = Object.seal(dog);
// dog.bark = 'wohoo';
console.log(dog);

const frozenDog = Object.freeze(dog);
dog.color = 'blue';
console.log(dog);


// iterating over object
// for in loop
for(let key in dog){
    console.log(key, dog[key]);
    
}
// object.keys
console.log(Object.keys(dog));
// object.value
console.log(Object.values(dog))
// object.enteris
console.log(Object.entries(dog))
