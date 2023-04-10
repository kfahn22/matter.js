class Ship {
    constructor() {
        this.sh = false;
        this.centerHull = new Box(300, 300, 200, 80, 45, this.sh);
        this.stern = new Triangle(400, 260, 0, 0, 0, 80, 100, 0);
        this.aft = new Triangle(200, 260, 0, 0, 0, 80, -100, 0);
        this.sails = [];
        this.windows = [];
        let options = {
            friction: 0,
            restitution: 0.95,
            isStatic: fixed
        }
        this.body = Bodies.circle(this.x, this.y, this.r,  options);
        Composite.add(world, this.body);
    }

    addSails() {
        for (let i = 0; i < 3; i++) {
            let sh = true;
            this.sails.push(new Box(225 + 100*i, 150, 45, 80, 100, sh));
        }
    }

    addWindows() {
        for (let i = 0; i < 3; i++) {
            let sh = true;
            this.windows.push(new Circle(300 + 50*i, 10))
        }
    }

    buildShip() {
      
    }
    // TODO:
    // add masts
}