//idea is that a class will have only a single instance and the that instance will be accessed globally

const Singleton = (function(){
  let instance;

  function createInstance(){
    return {value : "i'm one"};
  }

   //This ensures that only one instance of the CalculatorSingleton is ever created.
  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a);
console.log(b);