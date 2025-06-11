console.log(this);
const obj = {
    name1: 'Niha',
    print: () =>{
        console.log(this);
    }
}
obj.print()

// enclosing lexical context is function braces
const obj2 = {
    a:20,
    b: function(){
        const y = () =>{
            console.log(this.a);
        }
        y();
    },
    c: function (){
        console.log(this.a);
    }
}
obj2.b();
obj2.c();
