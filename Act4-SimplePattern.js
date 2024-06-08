var circleSize=80;
function setup() {
  createCanvas(400, 400);
  
  for (var x=0; x<width; x+=circleSize) {
    for (var y=0; y<height; y+=circleSize) {
      fill(255);
      ellipse(x,y, circleSize * 1.2, circleSize * 1.2);
      fill(0);
      ellipse(x, y, circleSize * 0.8, circleSize * 0.8);
      fill(255);
      ellipse(x, y, circleSize * 0.3, circleSize * 0.3);
    } 
  }
}
