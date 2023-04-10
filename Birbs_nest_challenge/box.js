class Box {
    constructor(x, y, w, h, a, sh) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
        this.sh = sh;
        let options = {
            friction: 0.3,
            restitution: 0.6
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        
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
        rectMode(CENTER);
        strokeWeight(1);
        
        rect(0, 0, this.w, this.h);
        pop();
    }
}