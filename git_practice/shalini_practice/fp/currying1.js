//converting a function with many args into a sequence of fucntions with each taking a single argument

function add (a,b,c){
    return a+b+c;
}

function curried(c){
    return function(b){
        return function(a){
            return a+b+c;
        }
    }
}

 console.log(curried(3)(2)(1));

 //takes the arguments until b===undefined

 function infiniteCurrying(a){
    return function(b){
        if(b !== undefined){
            return infiniteCurrying(a+b);
        }else{
            return a;
        }
    }
 }

 console.log(infiniteCurrying(3)(4)(5)());
 console.log(infiniteCurrying(1));