/**
 * Created by lowellbander on 6/5/16.
 */

class GameObject {
    constructor({context, x, y, angle, speed, wrap = false}) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.color = GameObject.randomColor();
        this.speed = speed;
        this.wrap = wrap
    }
    
    static randomColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);  
    }

    forward() {
        this.y += this.speed * Math.sin(this.angle);
        this.x += this.speed * Math.cos(this.angle);

        if (this.wrap) {
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
    }

    draw() {
        throw "GameObjects should implement a draw() method";
    }
}
