// https://stackoverflow.com/questions/68602889/how-to-apply-physics-to-complex-shapes-matter-js-p5-js
const blob = Vertices.fromPath('10.4235750010825 77.51573373392407 3.142478233002126 70.89274677890447 0.09197006398718799 61.45980047762196 1.1915720013184474 51.59196924554452 4.497757286928595 42.162760563619436 5.252622102311041 32.216346235505895 4.731619980811491 22.230638463608106 4.748780859149178 12.256964518539956 8.728313738681376 3.3252404103204602 17.998080279150148 0.07532797415084502 27.955564903146588 0.6294681264134124 37.68448491855515 2.8865688476481735 46.899804284802386 6.733477319787068 55.386932458422265 12.031766230704845 62.886098235421045 18.623827217916812 69.13243582467831 26.40824364010799 73.70136375533966 35.2754654128657 75.90839243871912 44.99927633563314 74.84120838749334 54.8784706257129 70.09272040861401 63.61579878615303 62.590342401896606 70.15080526550207 53.62552650480876 74.54988781923045 44.08788115809841 77.55817639102708 34.30859814694884 79.58860716640554 24.334764892578125 80.23994384765624 14.444775242328642 78.88621691226959');

class Blob {
    constructor(x, y) {

        let options = {
            friction: fric,
            restitution: rest
        }
        
        this.body = Bodies.fromVertices(x, y, blob, options);
        World.add(world, this.body);

        // Scales the body around the center
        Body.scale(this.body, 0.5, 0.5);
    }

    // from http://paulbourke.net/geometry/polygonmesh/
    computeArea(vertices) {
        let area = 0;
        for (let i = 0; i < vertices.length - 1; i++) {
            let v = vertices[i];
            let vn = vertices[i + 1];
            area += (v.x * vn.y - vn.x * v.y) / 2;
        }

        return area;
    }

    computeCenter(vertices) {
        let area = computeArea(vertices);
        let cx = 0,
            cy = 0;
        for (let i = 0; i < vertices.length - 1; i++) {
            let v = vertices[i];
            let vn = vertices[i + 1];
            cx += (v.x + vn.x) * (v.x * vn.y - vn.x * v.y) / (6 * area);
            cy += (v.y + vn.y) * (v.x * vn.y - vn.x * v.y) / (6 * area);
        }

        return {
            x: cx,
            y: cy
        };
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        scale(0.5, 0.5);
        translate(-center.x, -center.y);
        strokeWeight(0);
        fill('#546B2E')
        beginShape();
        for (const {
                x,
                y
            } of blob) {
            curveVertex(x, y);
        }
        endShape(CLOSE);
        pop();

        // Alternately, when drawing your blobs you could use 
        // the bodies vertices, but it looks like these are
        // converted into a convex polygon.
        // push();
        // stroke('red');
        // strokeWeight(1);
        // noFill();
        // beginShape();
        // for (const {
        //         x,
        //         y
        //     } of this.body.vertices) {
        //     curveVertex(x, y);
        // }
        // endShape(CLOSE);
        // pop();
    }
}