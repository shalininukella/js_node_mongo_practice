// // Bad: One large interface
// class Printer {
//   print() { /* implementation */ }
//   scan() { /* implementation */ }
//   fax() { /* implementation */ }
//   staple() { /* implementation */ }
// }

// // Good: Segregated interfaces
// class BasicPrinter {
//   print() { /* implementation */ }
// }

// class Scanner {
//   scan() { /* implementation */ }
// }

// class FaxMachine {
//   fax() { /* implementation */ }
// }

// class AllInOnePrinter extends BasicPrinter {
//   scan() { /* implementation */ }
//   fax() { /* implementation */ }
// }


// I – Interface Segregation Principle (ISP)
// "Clients should not be forced to depend on methods they do not use."

//bad 
// class Printer{
//     print(){}
//     fax(){}
//     scan(){}
// }

//good
class BasicPrinter {
    print() {
        console.log("Printing...");
    }
}

class Scanner {
    scan() {
        console.log("Scanning...");
    }
}

class Fax {
    fax() {
        console.log("Faxing...");
    }
}

class AllInOneMachine {
    constructor() {
        this.printer = new BasicPrinter();
        this.scanner = new Scanner();
        this.faxMachine = new Fax();
    }

    print() {
        this.printer.print();
    }

    scan() {
        this.scanner.scan();
    }

    fax() {
        this.faxMachine.fax();
    }
}

// Usage
const aio = new AllInOneMachine();
aio.print(); // "Printing..."
aio.scan();  // "Scanning..."
aio.fax();   // "Faxing..."
