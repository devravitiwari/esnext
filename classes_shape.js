class Shape {
    constructor(type) {
        this.type = type;
    }

    static create(type) {
        return new Shape(type);
    }

    draw() {
        console.log(`Drawing ${this.type}`);
    }

}


let circle = new Shape('Circle');
circle.draw(); // logs "Drawing Circle" to the console



let square = Shape.create('Square');
square.draw(); // logs "Drawing Square" to the console
