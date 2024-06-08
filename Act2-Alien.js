function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#F9F7C9");
  translate(width / 2, height / 2);
  
  // Body
  fill("#80BCBD");
  ellipse(0, 0, 100, 150);
  
  // Head
  fill("#D5F0C1");
  ellipse(0, -75, 60, 80);
  
  // Eyes
  fill("#FBF9F1");
  ellipse(-20, -90, 20, 20);
  ellipse(20, -90, 20, 20);
  
  // Mouth
  fill("#CD8D7A");
  arc(0, -60, 40, 20, 0, PI);
  
  // Arms
  push();
  fill("#80BCBD");
  rotate(radians(-30));
  rect(60, -15, 100, 30);
  pop();
  
  push();
  fill("#80BCBD");
  rotate(radians(30));
  rect(-160, -15, 100, 30);
  pop();

  // Legs
  push();
  fill("#80BCBD");
  rotate(radians(-15));
  rect(15, 75, 20, 100);
  pop();

  push();
  fill("#80BCBD");
  rotate(radians(15));
  rect(-35, 75, 20, 100);
  pop();
}
