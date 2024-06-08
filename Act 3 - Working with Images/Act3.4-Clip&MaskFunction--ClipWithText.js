//Variables declared by let are only available inside the block where they're defined. 

//clip - allows to hide all parts of the bottom
//
let img;

function preload(){
  img=loadImage("sunflower.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(190,220,250);
  
  //image inside shape, using clip function - only works with one shape
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  //cnv7.circle(100,100,190);
  //cnv7.triangle(0,0,100,200,200,0);
  // ctx7 = cnv7.canvas.getContext("2d");
  // ctx7.clip();
  // We can skip the above and achieve the clip like this:
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0);
  image(cnv7,350,225);
  
  //image inside shape, using mask function - works with multiple shapes
  img.resize(200,200);
  let cnv5 = createGraphics(200,200);
  //cnv5.circle(100,100,190);
  cnv5.triangle(0,0,100,200,200,0);
  img.mask(cnv5);
  image(img,300,25);
  
  //rectangle inside circle / circle inside rectangle using clip function
  cnv1 = createGraphics(width, height);
  ctx1 = cnv1.canvas.getContext("2d");
  //cnv1.circle(100, 100, 100);
  cnv1.strokeWeight(3);
  cnv1.rect(25, 0, 100);  
  ctx1.clip();
  cnv1.fill(0, 0, 200); //color of the circle
  cnv1.circle(100, 100, 100);  
  //cnv1.rect(25, 0, 100);
  image(cnv1, 50, 50);
  
  // show drawings inside of text using clip and erase functions
  // first what's behind the text:
  cnv4 = createGraphics(width, height);
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(100, 200, 200);
  ctx2.clip();
  cnv4.fill(0, 200, 0);
  cnv4.circle(200, 230, 100);
  image(cnv4, 0, 0);
  fill(0,200,0);
  //circle(300,230,100);
  // and now for the text:
  cnv3 = createGraphics(width, height);
  cnv3.fill(200,0,0);  //color of the text square
  cnv3.rect(100,200,200); 
  cnv3.erase();
  cnv3.textSize(200); //size of the text square 
  cnv3.text("A.", 100, 350);//text inside the text square
  cnv3.noErase();
  image(cnv3, 0, 0);
}
