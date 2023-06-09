class Spring extends VerletSpring2D {
  constructor(a, b, strength) {
    let length = dist(a.x, a.y, b.x, b.y);
    super(a, b, length * 1, strength);
    physics.addSpring(this);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}