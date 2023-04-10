// Coding Train / Daniel Shiffman

// https://www.youtube.com/watch?v=szztTszPp-8

// Note that the syntax has been updated to use object destructuring
const {
    Engine,
    World,
    Bodies,
    Vertices,
    Composite,
    Constraint,
    Render,
    Runner,
    Mouse,
    MouseConstraint
} = Matter;

let p;
let engine;
let world;
let boxes = [];
let triangles = [];
let circles = [];
let boundaries = [];


function setup() {
    let canvas = createCanvas(600, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    Runner.run(world);
    for (let i = 0; i < 3; i++) {
        let sh = true;
        boxes.push(new Box(225 + 100*i, 150, 45, 80, 100, sh))
    }
    sh = false
    boxes.push(new Box(300, 300, 200, 80, 45, sh));

    triangles.push(new Triangle(400, 260, 0, 0, 0, 80, 100, 0));
    triangles.push(new Triangle(200, 260, 0, 0, 0, 80, -100, 0));
}

function draw() {
    background(0,0,255);
    // Engine.update(engine);
    // for (let i = 0; i < boundaries.length; i++) {
    //     boundaries[i].show();
    // }
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    for (let i = 0; i < triangles.length; i++) {
        triangles[i].show();
    }
}