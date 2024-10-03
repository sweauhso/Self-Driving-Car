class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    // Method to update direction of car
    update(){
        // We are using adding acceleration to the speed. And everytime this happens, we are subtracting the y position by the speed. Giving the illusion of an accelerating car.
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        // Negative sign just to indicate car is going backwards
        if(this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2
        }

        if(this.speed > 0){
            this.speed -= this.friction;
        }
        if(this.speed < 0){
            this.speed += this.friction;
        }
        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }

        if(this.controls.left){
            this.angle += 0.03;
        }
        if(this.controls.right){
            this.angle -= 0.03;
        }

        // Implementing movement with rotation, sin of angle scaling with speed
        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }

    // Method to draw black box car
    draw(ctx){
        // Create a rotation
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width/2, 
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();
    }
}