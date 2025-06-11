function sum(){
    var count = 0;
    return function (){
        count++;
        console.log(count);
        return count;
    }
}
console.log(sum());

const counter = sum();
console.log(counter());
console.log(counter());
console.log(counter());


// lexical scope
function outer(){
    let msg = 'Hey';
    function inner(){
        console.log(msg);
    }
    inner();
}
outer();