function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 0, 70);
  
  fill (1000,0,70);
  //rect (x, y, width, height)
  rect (150,150,100,50);
  
  fill (1000,100,70);
  //ellipse (x, y, width, height)
  //ellipse (150,150,25,25);
  //ellipse (200,150,25,25);
  ellipse (220,200,25,25);
  ellipse (180,200,25,25);
  
  //triangle (x1, y1, x2, y2, x3, y3)
  triangle (160, 160, 150,150, 200, 150);
  
  stroke (0);
  strokeWeight (3);
  //Line (x1, y1, x2, y2)
  //line (100,290,150,250);
  //line (100,200,150,250);
  //line (200,100,250,150);
}
