class Person {
    #secret = 'data';
    name = 'Niha';
    getSecret(){
        return this.#secret;
    }
}
const newPerson = new Person();

console.log(newPerson.getSecret());
console.log(newPerson.name);

// console.log(Person.#secret);

const secretKey = Symbol('secret');
const pbj = {
    publicData : 'visible',
    [secretKey]: 'Hidden'
}
console.log(pbj[secretKey]);
console.log(Object.entries(pbj))