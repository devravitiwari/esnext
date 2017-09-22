// Reflect.apply

let averages = [84, 62, 95, 7, 34];
let max = Math.max.apply(Math, averages);
let max2 = Reflect.apply(Math.max, Math, averages);
console.log(max, max2);



// Reflect.construct

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get r() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get theta() {
        return Math.atan2(this.y, this.x);
    }
    get polar() {
        return `P(r, θ) = (${this.r.toFixed(4)} , ${this.theta.toFixed(4)})`;
    }
}

let point = Reflect.construct(Point, [10, 10]);
console.log(point.polar)
