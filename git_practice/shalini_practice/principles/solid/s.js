// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
// }

// class Printer {
//   print(result) {
//     console.log("Result:", result);
//   }
// }

// const calc = new Calculator();
// const printer = new Printer();
// const result = calc.add(2, 3);
// printer.print(result); // Result: 5


// ✅ S - Single Responsibility Principle (SRP)
// Each function/class should have only one job.

class Add {
    add(a,b){
        return a+b;
    }
}

class Print{
    printing(){
        console.log("printing...");
    }
}

//usage
const adding = new Add();
const printing = new Print();
printing.printing();
const sum = adding.add(3,4);
console.log(sum);

