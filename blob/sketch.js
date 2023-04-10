const {
    Engine,
    Runner,
    World,
    Bodies,
    Body,
    Common,
    Composite,
    Mouse,
    MouseConstraint,
    Vertices
  } = Matter;



let engine;
let world;
let blobs = [];
let boundaries = [];
let mConstraint;
let center = []
const fric = 0.6;
const rest = 0.7;
const vert = Vertices.fromPath('10.4235750010825 77.51573373392407 3.142478233002126 70.89274677890447 0.09197006398718799 61.45980047762196 1.1915720013184474 51.59196924554452 4.497757286928595 42.162760563619436 5.252622102311041 32.216346235505895 4.731619980811491 22.230638463608106 4.748780859149178 12.256964518539956 8.728313738681376 3.3252404103204602 17.998080279150148 0.07532797415084502 27.955564903146588 0.6294681264134124 37.68448491855515 2.8865688476481735 46.899804284802386 6.733477319787068 55.386932458422265 12.031766230704845 62.886098235421045 18.623827217916812 69.13243582467831 26.40824364010799 73.70136375533966 35.2754654128657 75.90839243871912 44.99927633563314 74.84120838749334 54.8784706257129 70.09272040861401 63.61579878615303 62.590342401896606 70.15080526550207 53.62552650480876 74.54988781923045 44.08788115809841 77.55817639102708 34.30859814694884 79.58860716640554 24.334764892578125 80.23994384765624 14.444775242328642 78.88621691226959');

//start sim after x time
function setup() {
  const cnv = createCanvas(600, 400);

  engine = Engine.create();
  world = engine.world;

  const runner = Runner.create();
  Runner.run(runner, engine);

  boundaries.push(new Boundary(width / 2, 400, width, 20, 0));
  //create x bodies
  for (let i = 0; i < 4; i++) {
    blobs.push(new Blob(random(50, width - 100), random(50, height - 100)));
    blobs[i].computeCenter();
  }
  for (let i = 0; i < 4; i++) {
      area[i] = blobs[i].computeArea(vert);
    center[i] = blobs[i].computeCenter(vert);
  }
}

function draw() {
  background('#EEF2FD');

  // show boundary
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  //show all bodies
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}

function mouseClicked() {
  blobs.push(new Blob(mouseX, mouseY));
}