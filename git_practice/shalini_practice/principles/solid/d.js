// D – Dependency Inversion Principle (DIP)
// "High-level modules should not depend on low-level modules. Both should depend on abstractions."
// And:
// "Abstractions should not depend on details. Details should depend on abstractions."


class Add {
    cal(a,b){
        return (a+b);
    }
}

class Mul{
    cal(a,b){
         return (a*b);
    }
}

//high level 
class Cal{
    constructor(service){
        this.service = service;
    }

    cal(a, b){
        return this.service.cal(a,b);
    }
}

const serviceAdd = new Add();
const serviceMul = new Mul();

const calAdd = new Cal(serviceAdd);
const calMul = new Cal(serviceMul);

console.log(calAdd.cal(3,4));
console.log(calMul.cal(4,5));

