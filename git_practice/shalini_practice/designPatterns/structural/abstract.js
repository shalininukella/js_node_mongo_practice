class Abstract {
    add(a,b){
        throw new Error("must implement the add");
    }

    mul(a,b){
        throw new Error("must implement the mul");
    }
}

class Add extends Abstract{
   add(a,b){
    return a+b;
   }

}

class Mul extends Abstract{
    mul(a,b){
    return a*b;
   }
}

const adding = new Add();
console.log(adding.add(2,3));