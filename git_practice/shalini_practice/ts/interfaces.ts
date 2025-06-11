interface User {
    id:number;
    name: string;
    email?: string;
    readonly joining: number;
}

interface Employee extends User{
    salary:number;
}


const ram: User = { 
    id:1,
    name:"shalini",
    joining: 24,
}

class something implements User{
    constructor(
        public id:number,
        public name: string,
        public email: string,
        public joining: number
    ){
        this.email = email;
    }

    calculateSomething():number{
        return 21;
    }
}

//types 
type User1 = {
    name : string,
    age: number
}

type Status = "success" | "failure";

type A = {
    a: number;
}

type B = {
    b:number;
}

type AB = A & B;


//generics 
//fucntion 

function idenity<T>(arg : T): T{
    return arg;
}

//generinc interface 
interface User2<T> {
    id: T,
    name: T,
    class: T,
}

//generic class 
class Shalini<T> {
    public name:T;
    public arr: T[] = [];

}

//enums 
//numeric enum
enum Direction {
    Up, 
    Down,
    Right,
    Left
}

//string enum
enum Status {
    JSON = 'json',
    HTML = 'html',
    TEXT = 'text',
}

let dir:Direction = Direction.Up;
console.log(dir);

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   inStock?: boolean; // Optional property
//   readonly sku: string; // Can't be modified after creation
//   [key: string]: any; // Index signature for additional properties
// }

// // Apply to object literal
// const book: Product = {
//   id: 1,
//   name: "TypeScript Handbook",
//   price: 29.99,
//   sku: "BOOK-TS-001",
//   author: "TypeScript Team" // OK because of index signature
// };