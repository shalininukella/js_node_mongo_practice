function Cal(){
    this.cal = (a,b) => a+b;
}

function Decorator(base){
    this.cal = function (a,b){
        console.log('decorated');
        return base.cal(a,b);
    }
}
const base = new Cal()
const dec = new Decorator(base);

console.log(dec.cal(2,3));