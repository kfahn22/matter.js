// Coding Train / Daniel Shiffman

// https://www.youtube.com/watch?v=szztTszPp-8

// Note that the syntax has been updated to use object destructuring
const {
    Engine,
    World,
    Bodies,
    Constraint
} = Matter;


let engine;
let world;
let particles = [];
let boundaries = [];

function setup() {
    createCanvas(400, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    
    let prev = null;
    for (let x = 200; x < 400; x += 20) {
        let fixed = false;
        if (!prev) {
            fixed = true;
        }
        let p = new Particle(x, 100, 5, fixed);
        particles.push(p);
        
        if (prev) {
            fixed = true;
            let options = {
                bodyA: p.body,
                bodyB: prev.body,
                length: 20,
                stiffness: 0.4
            }

            let constraint = Constraint.create(options);
            World.add(world, constraint);
        }
        prev = p;
    }
    boundaries.push(new Boundary(width / 2, 400, width, 20, 0));
}

function draw() {
    background(51);
    Engine.update(engine);
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    for (i = 0; i < particles.length; i++) {
        particles[i].show();
    }
}