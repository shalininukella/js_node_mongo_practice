class Shape{
    area(){
        console.log("calculating the area")
    }
}

class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }

    area(){
        return this.side*this.side;
    }
}

class Rectangle extends Shape{
    constructor(l, b){
        super();
        this.l = l;
        this.b = b;
    }

    area(){
        return this.l*this.b;
    }
}

//usage 
const sq = new Square(3);
const rec = new Rectangle(3,4);
console.log(sq.area());
console.log(rec.area());