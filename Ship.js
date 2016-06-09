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
        this.turnAmount = 10;
        
        this.fireChance = 0.5;
        this.turnInterval = 500;
        
        this.torpedoSize = 7;
        this.torpedos = [];
        
        this.doAutopilot();
        this.drawControls();
    }
    
    drawControls() {
        var controlBox = document.getElementById('controls');
        controlBox.appendChild(Scrubber.build({
            name: 'speed',
            min: 0,
            max: 10,
            onChange: e => this.speed = e.target.value,
            defaultValue: this.speed,
        }));
        controlBox.appendChild(Scrubber.build({
            name: 'fireChance',
            min: 0,
            max: 1,
            onChange: e => this.fireChance = e.target.value, 
            defaultValue: this.fireChance,
            step: 0.1,
        }));
        controlBox.appendChild(Scrubber.build({
            name: 'turnInterval',
            min: 0,
            max: 1000,
            onChange: e => this.turnInterval = e.target.value,
            defaultValue: this.turnInterval,
        }));
        controlBox.appendChild(Scrubber.build({
            name: 'ship size',
            min: 1,
            max: 100,
            onChange: e => this.width = e.target.value,
            defaultValue: this.width,
        }));
        controlBox.appendChild(Scrubber.build({
            name: 'torpedo size',
            min: 1,
            max: 30,
            onChange: e => this.torpedoSize = e.target.value,
            defaultValue: this.torpedoSize,
        }));
    }
    
    fire() {
        this.torpedos.push(new Torpedo({
            context: context,
            x: this.x,
            y: this.y,
            angle: this.angle,
            speed: this.speed * 1.5 + 1,
            size: this.torpedoSize,
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
            window.setTimeout(changeAngle, this.turnInterval);
        };
        changeAngle();
        
        var autoFire = () => {
            if (random({min: 0, max: 1}) < this.fireChance) {
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
