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
        this.angle = 0;
        this.width = 20;
        this.height = 40;
    }
    
    center() {
        return {
            x: this.x + this.width/2,
            y: this.y + this.height/2
        };
    }
    
    forward() {
        var amt = 10;
        this.y += amt * Math.sin(this.angle);
        this.x += amt * Math.cos(this.angle);
    }
    
    right() {
        this.angle += 10 * Math.PI/180;
    }
    
    left() {
        this.angle -= 10 * Math.PI/180;
    }
    
    draw() {
        this.context.fillStyle = this.color;

        this.context.save();
        var center = this.center();
        this.context.translate(center.x, center.y);
        this.context.rotate(this.angle);
        
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(-this.width, -this.width);
        this.context.lineTo(-this.width, this.width);
        this.context.fill();

        this.context.restore();
    }
}
