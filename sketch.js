let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let prevMinute = -1;

function setup() {
  createCanvas(620, 400);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.75;
  minutesRadius = radius * 0.75;
  hoursRadius = radius * 0.75;
  clockDiameter = radius * 1.7;

  cx = width / 2 - 5;
  cy = height / 2 - 5;
  
}

function draw() {
  background(232, 222, 202);
  
  
  
  let currentMinute = minute();

  // Check if the minute has changed
  if (currentMinute !== prevMinute) {
    // Print the new minute value to the console
    console.log("Minute changed to:", currentMinute);

    // Update the previous minute value
    prevMinute = currentMinute;
  }
  
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // clock hands
  noStroke();
  fill(0, 0, 204, 125)
  ellipse(cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius, 90, 90);
  fill(204,0,0,175);
  ellipse(cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius, 30, 30);
  fill(255,255,0);
  ellipse(cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius, 10, 10);

  // minute marks
  stroke(0);
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}
