function add(a,b){
    return a+b;
}
function multiple(a,b){
    return a*b;
}
console.log(add(multiple(3,4),5));


// prototypical inheritance
const obj1 = {
    // name1:' Niharika',
    render(){
        return this.name1;
    }
}
const obj2 ={
    __proto__:obj1,
    name1: 'Niha'
}
console.log(obj2['name1']);
console.log(obj2.render());