/**
 * Created by lowellbander on 6/8/16.
 */

class Game {
    constructor(context) {
        this.context = context;
        this.step = this.step.bind(this);
        
        this.init();
    }
    
    init() {
        this.ship = new Ship(context);
        document.onkeydown = e => {
            switch (e.code) {
                case 'Space':
                    this.ship.fire();
                    break;
                case 'ArrowUp':
                    this.ship.increaseSpeed();
                    break;
                case 'ArrowDown':
                    this.ship.decreaseSpeed();
                    break;
                case 'ArrowRight':
                    this.ship.right();
                    break;
                case 'ArrowLeft':
                    this.ship.left();
                    break;
                default:
                    break;
            }
        };
        this.step();
    }

    step() {
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.ship.draw();
        window.requestAnimationFrame(this.step);
    }

}
