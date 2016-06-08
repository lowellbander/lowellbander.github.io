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
        
        this.doAutopilot();
        this.drawControls();
    }
    
    drawControls() {
        var controlBox = document.getElementById('controls');
        var label = document.createElement('label');
        label.innerHTML = 'speed';
        label.setAttribute('for', 'speed');
        controlBox.appendChild(label);
        var slider = document.createElement('input');
        slider.setAttribute('type', 'range');
        slider.setAttribute('id', 'speed');
        slider.setAttribute('min', 0);
        slider.setAttribute('max', 10);
        slider.setAttribute('value', this.speed);
        slider.oninput = e => this.speed = e.target.value;
        controlBox.appendChild(slider);
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
    
    doAutopilot() {
        function random({min, max}) {
            return Math.random() * (max - min) + min;
        }
        
        var changeAngle = () => {
            var scale = 0.05;
            this.angle += random({
                min: -this.turnAmount * scale,
                max: this.turnAmount * scale
            });
            window.setTimeout(changeAngle, 500);
        };
        changeAngle();
        
        var autoFire = () => {
            if (random({min: 0, max: 1}) < 0.5) {
                this.fire();
            }
            window.setTimeout(autoFire, 500);
        };
        autoFire();
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
