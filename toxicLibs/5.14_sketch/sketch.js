// The Coding Train / Daniel Shiffman
// 5.14 ToxicLibs tutorial:  Paricles & Springs


const {
    VerletPhysics2D,
    VerletParticle2D,
    VerletSpring2D
} = toxi.physics2d;

const {
    GravityBehavior
} = toxi.physics2d.behaviors;

const {
    Vec2D,
    Rect
} = toxi.geom;

// Reference to physics world
let physics;

let p1, p2;
let spring;

function setup() {
    createCanvas(640, 360);

    // Initialize the physics
    physics = new VerletPhysics2D();
    physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.5)));

    // Set the world's boundign box
    let bounds = new Rect(0, 0, width, height);
    physics.setWorldBounds(bounds);

    // Make two particles
    p1 = new Particle(new Vec2D(width / 2, 20));
    p2 = new Particle(new Vec2D(width / 2 + 160, 20));

    // Lock one in place
    p1.lock();

    // Make a spring connecting both Particles
    // We are using a Spring class that extends the VerletSpring2D 
    spring = new Spring(p1, p2, 160, 0.1);

    // In the video, the particles/springs are added into the physics world
    // In this sketch, particles/springs are added in the Particle/Spring class
}

function draw() {
    background(255);

    //Update the physics world
    physics.update()
    
    // Draw a line between the particles
    // stroke(0);
    // strokeWeight(2);
    // line(p1.x, p1.y, p2.x, p2.y);

    // The Particle and Spring classes have a display function
    spring.display();

    // Display the particles
    p1.display();
    p2.display();
}