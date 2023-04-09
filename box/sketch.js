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
    ground = new Boundary(200, height, width, 100);
    Composite.add(world, ground);

}
    
function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10,40)));
}

function draw() {
    background(51);
    Engine.update(engine);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    ground.show();
}