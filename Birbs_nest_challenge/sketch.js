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
let Y_AXIS;

function setup() {
    let canvas = createCanvas(600, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    Runner.run(world);
    // for (let i = 0; i < 3; i++) {
    //     let sh = true;
    //     boxes.push(new Box(225 + 100*i, 150, 45, 80, 100, sh))
    // }
    // sh = false
    // boxes.push(new Box(300, 300, 200, 80, 45, sh));
    circles.push(new Circle(500, 50, 30));
    // triangles.push(new Triangle(400, 260, 0, 0, 0, 80, 100, 0));
    // triangles.push(new Triangle(200, 260, 0, 0, 0, 80, -100, 0));
}

function draw() {
    background(0,0,255);
    let c1 = color(221,240,229);
    let c2 = color(120, 192, 145);
    setGradient(0, 0, 600, 600, c1, c2, Y_AXIS);
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
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }