var word = "Time's up!!!"
var font1, font2, font3;

function preload() {
  font1 = loadFont ("BlackOpsOne-Regular.ttf");
  font2 = loadFont ("Comfortaa-Light.ttf");
  font3 = loadFont ("ShadowsIntoLight.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  fill(255,0,0); //color of the text
  textFont (font3,100); //choose the font, text size
  textAlign (CENTER);
  text(word, width/2, height/2); //text, x, y
}
