/**
 * Created by lowellbander on 6/5/16.
 */

var randomColor = _ => '#'+Math.floor(Math.random()*16777215).toString(16);

class Ship {
    constructor(context) {
        this.context = context;
        this.color = randomColor();
        this.x = 300;
        this.y = 300;
        this.speed = 1;
        this.angle = 0;
        this.width = 20;
        this.height = 40;
        this.turnAmount = 10;
    }
    
    center() {
        return {
            x: this.x + this.width/2,
            y: this.y + this.height/2
        };
    }
    
    increaseSpeed() {
        this.speed += 1;
    }
    
    decreaseSpeed() {
        this.speed -= 1;
    }
    
    forward() {
        this.y += this.speed * Math.sin(this.angle);
        this.x += this.speed * Math.cos(this.angle);
        
        // wrap
        if (this.x > this.context.canvas.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = this.context.canvas.width;
        }
        if (this.y > this.context.canvas.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = this.context.canvas.height;
        }
    }
    
    right() {
        this.angle += this.turnAmount * Math.PI/180;
    }
    
    left() {
        this.angle -= this.turnAmount * Math.PI/180;
    }
    
    draw() {
        this.forward();
        
        this.context.fillStyle = this.color;

        this.context.save();
        var center = this.center();
        this.context.translate(center.x, center.y);
        this.context.rotate(this.angle);
        
        // draw ship
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(-this.width, -this.width);
        this.context.lineTo(-this.width, this.width);
        this.context.lineTo(0, 0);
        this.context.fill();
        
        // draw velocity
        this.context.moveTo(0, 0);
        this.context.strokeWidth = 7;
        this.context.lineTo(this.speed * 10, 0);
        this.context.stroke();

        this.context.restore();
    }
}
