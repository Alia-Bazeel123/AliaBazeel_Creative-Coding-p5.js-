// Array to store points
var points = [];
// Multiplier for Perlin noise
var mult = 0.005;

function setup() {
  // Create canvas covering the entire window
  createCanvas(windowWidth, windowHeight);
  // Set background color
  background(30);
  // Set angle mode to degrees
  angleMode(DEGREES);
  // Set noise detail
  noiseDetail(1);
  
  // Density of points
  var density = 50;
  // Spacing between points
  var space = width / density;
  
  // Generate grid of points
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      // Create a vector for each point with random offset
      var p = createVector(x + random(-10, 10), y + random(-10, 10));
      // Add point to array
      points.push(p);
    }
  }
}

function draw() {
  // No outline for shapes
  noStroke();
  
  // Loop through each point
  for (var i = 0; i < points.length; i++) {
    // Map point coordinates to color
    var r = map(points[i].x, 0, width, 50, 255);
    var g = map(points[i].y, 0, height, 50, 255);
    var b = map(points[i].x, 0, width, 255, 50);
    
    // Set fill color
    fill(r, g, b);
    
    // Calculate angle based on Perlin noise
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    
    // Move point based on angle
    points[i].add(createVector(cos(angle), sin(angle)));
    
    // Draw ellipse at point
    ellipse(points[i].x, points[i].y, 1);
  }
  
  // Add Text "Bath Spa University"
  // Set text color to white
  fill(255);
  // No stroke around text
  noStroke();
  // Set text size
  textSize(36);
  // Align text horizontally and vertically
  textAlign(CENTER, CENTER);
  // Set text style to semi-bold italic
  textStyle(BOLDITALIC);
  // Display the text at the center of the canvas
  text("Bath Spa University", width/2, height/2);
}
