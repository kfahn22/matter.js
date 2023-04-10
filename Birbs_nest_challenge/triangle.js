class Triangle {
    constructor(x, y, x1, y1, x2, y2, x3, y3) {
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        let options = {
            friction: 0.3,
            restitution: 0.6
        }
        this.vertices = [ {"x": this.x1, "y": this.y1}, {"x": this.x2, "y": this.y2}, {"x": this.x3, "y": this.y3} ];
       
        this.body = Bodies.fromVertices(this.x, this.y, this.vertices, options);

        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        //let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        if (this.sh)
        {
            shearX(this.a);
            stroke(255)
            fill(255);
        } else {
            stroke(63,34,15);
            fill(175,67,25);
        }
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        pop();
    }
}