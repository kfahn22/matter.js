// Coding Train / Daniel Shiffman

// https://www.youtube.com/watch?v=szztTszPp-8

// Note that the syntax has been updated to use object destructuring
const { Engine, World, Bodies } = Matter;

let engine;
let world;
let circles = [];
let boundaries = [];

function setup() {
    createCanvas(400, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    boundaries.push(new Boundary(150, 200, width* 0.6, 20, 0.3));
    boundaries.push(new Boundary(250, 300, width* 0.6, 20, -0.3));
}
    
function draw() {
    background(51);
    Engine.update(engine);
    circles.push(new Circle(200, 50, random(5, 10)));
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
        if (circles[i].isOffScreen()) {
            circles[i].removeFromWorld();
            circles.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    console.log(circles.length, world.bodies.length);
}