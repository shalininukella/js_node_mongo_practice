//separating the private and the public things in a code 

const MathModule = (function(){
    let val = 22;
    function add (a,b){
        return a+b;
    }
    return {
        add, 
        getVal : () => val
    }
})();

console.log(MathModule.add(23, 2));
console.log(MathModule.getVal());
