var fixrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite (500, 200,50,50);
  fixrect.shapeColor="green"; 
  movingrect.shapeColor="green";
  movingrect.velocityX = -2;
  fixrect.velocityX = 2;
}

function draw() {
  background(255,255,255); 

bounceOff(fixrect,movingrect);
  //movingrect.y=World.mouseY; 
   
  drawSprites();
}

