// class Bird {
//   fly() {
//     console.log("Flying...");
//   }
// }

// // Violates LSP
// class Penguin extends Bird {
//   fly() {
//     throw new Error("Cannot fly!"); // Problem: breaks substitutability
//   }
// }


class Bird {
    move(){
        console.log("Moving....");
    }
}

class SwimmingBird extends Bird{
    swim(){
        console.log("Swimming");
    }

    move(){
        this.swim();
    }
}

class FlyingBird{
    fly(){
        console.log("flying");
    }

    move(){
        this.fly();
    }
}

//usage
const fly = new FlyingBird();
const swim = new SwimmingBird();
fly.move();
fly.fly();
swim.move();
swim.swim();
const bird = new Bird();
bird.move();