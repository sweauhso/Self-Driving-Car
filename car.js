class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;

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
        this.y -= this.speed;
    }

    // Method to draw black box car
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x - this.width/2, 
            this.y - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}