/**
 * 
 * Created by lowellbander on 6/5/16.
 */

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

function random(max, min) {
    return Math.random() * (max - min) + min;
}

var randomColor = _ => '#'+Math.floor(Math.random()*16777215).toString(16);

class Circle {
    constructor(context) {
        this.dx = random(-2, 2);
        this.dy = random(-2, 2);
        this.color = randomColor();
        this.context = context;
        this.x = random(this.context.canvas.width, 0);
        this.y = random(this.context.canvas.height, 0);
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.moveTo(this.x, this.y);
        this.context.arc(this.x, this.y, 5, 0, 2*Math.PI);
        this.context.fill();
    }
}

var circles = [];
// window.setInterval(_ => {
//     if (circles.length < 20) {
//         circles.push(new Circle(context));
//     }}, 1000);
// window.setInterval(_ => {
//     circles.forEach(_ => _.update());
//     circles.forEach(_ => _.draw());
// }, 50);
// ------------------------------------------------------
const CANVAS_WIDTH = context.canvas.width;
const CANVAS_HEIGHT = context.canvas.height;

var ship = new Ship(context);
function step() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ship.draw();
    window.requestAnimationFrame(step);
}
step();

document.onkeydown = e => {
    switch (e.code) {
        case 'ArrowUp':
            ship.forward();
            break;
        case 'ArrowRight':
            ship.right();
            break;
        case 'ArrowLeft':
            ship.left();
            break;
        default:
            break;
    }
};
