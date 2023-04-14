class Particle extends VerletParticle2D {
    constructor(x, y) {
      super(x, y);
      physics.addParticle(this);
    }
  
    display() {
      fill(127);
      stroke(0);
      strokeWeight(2);
      ellipse(this.x, this.y, 32, 32);
    }
  }