let cols, rows;
let scl = 20;
let inc = 0.1;
let zOffset = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background(20, 20, 50, 10); 
  stroke(255, 200); 
  noFill();
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      
      let angle = noise(x * inc, y * inc, zOffset) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      let px = x * scl;
      let py = y * scl;

      
      push();
      translate(px, py);
      rotate(v.heading());
      strokeWeight(1.5);
      line(0, 0, scl * 0.75, 0);
      pop();

      
      strokeWeight(4);
      
    }
  }

  zOffset += 0.01; 
}
