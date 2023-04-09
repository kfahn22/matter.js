let Engine = Matter.Engine,
    World = Matter.World,
    //Runner = Matter.Runner,
    Bodies = Matter.Bodies;
    Composite = Matter.Composite;

let engine;
let world;
let boxes = [];
let ground;

function setup() {
    createCanvas(400, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    let options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, height, width, 100, options);
    Composite.add(world, ground);

}
    
function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10,40)));
}

function draw() {
    background(51);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    fill(170);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 100);
}