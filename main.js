const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    // requestAnimationFrame calls the animate function again and again many times per second. Gives the illusion of movement. 
    requestAnimationFrame(animate);
}