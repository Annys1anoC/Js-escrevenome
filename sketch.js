function setup() {
  createCanvas(700, 700);
  background("rgb(0,255,0)");
}

function draw() {
  
  stroke("rgb(177,36,177)");
  fill("black");
 
  // console.log(mouseIsPressed);

  if(mouseIsPressed) {
  rect (mouseX,mouseY,25,25);
  }
}
