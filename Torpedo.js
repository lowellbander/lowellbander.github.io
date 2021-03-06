/**
 * Created by lowellbander on 6/5/16.
 */

class Torpedo extends GameObject {
    constructor({context, x, y, angle, speed, size}) {
        super({
            context: context,
            x: x,
            y: y,
            angle: angle,
            speed: speed,
        });
        this.size = size;
    }
    
    draw() {
        this.forward();
        
        this.context.save();
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        this.context.fillStyle = GameObject.randomColor();
        this.context.fill();
        this.context.restore();
    }
}
