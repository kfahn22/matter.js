// Coding Train / Daniel Shiffman

// Note that the syntax has been updated to use object destructuring
// Note that we use Composite to add elements 
const { Engine, World, Bodies, Composite } = Matter;

let engine;
let world;
let circles = [];
let boundaries = [];

function setup() {
    createCanvas(400, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    boundaries.push(new Boundary(150, 100, width* 0.6, 20, 0.3));
    boundaries.push(new Boundary(250, 300, width* 0.6, 20, -0.3));
   
}
    
function mouseDragged() {
    circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw() {
    background(51);
    Engine.update(engine);
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
   
}