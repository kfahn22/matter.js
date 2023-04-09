// Coding Train / Daniel Shiffman
// Syntax from 15.8 Matter.js tutorial
// https://www.youtube.com/watch?v=uITcoKpbQq4


let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;
let world;
let circles = [];
let boundaries = [];

function setup() {
    createCanvas(400, 400);

    // Create an engine
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