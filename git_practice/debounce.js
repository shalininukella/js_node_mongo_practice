function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() =>{
            func.apply(this,args);
        }, delay)
    }
}

debounce(function(){
    console.log('hey')
}, 5000)();

{/* <button id='btn'>click me</button>
document.getElementById('btn').addEventListener('click', handler); */}