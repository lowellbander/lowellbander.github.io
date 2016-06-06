/**
 * Created by lowellbander on 6/5/16.
 */

class Ship extends GameObject {
    constructor(context) {
        super({
            context: context,
            x: 300,
            y: 300,
            angle: 0,
            speed: 1,
            wrap: true,
        });
        this.width = 20;
        this.height = 40;
        this.turnAmount = 10;
        
        this.torpedos = [];
    }
    
    center() {
        return {
            x: this.x + this.width/2,
            y: this.y + this.height/2
        };
    }
    
    fire() {
        this.torpedos.push(new Torpedo({
            context: context,
            x: this.x,
            y: this.y,
            angle: this.angle,
            speed: this.speed * 1.5 + 1,
        }));
    }
    
    increaseSpeed() {
        this.speed += 1;
    }
    
    decreaseSpeed() {
        this.speed -= 1;
    }
    
    right() {
        this.angle += this.turnAmount * Math.PI/180;
    }
    
    left() {
        this.angle -= this.turnAmount * Math.PI/180;
    }
    
    draw() {
        this.forward();
        
        Triangle.draw({
            context: this.context,
            width: this.width,
            x: this.x,
            y: this.y,
            angle: this.angle,
            color: this.color,
        });

        this.torpedos.forEach(_ => _.draw());
    }
}
