var fixdrect, movrect;
function setup() {
  createCanvas(800,400);
fixdrect=createSprite(600,200,50,50);
fixdrect.shapeColor="pink";
movrect=createSprite(200,200,50,50);
movrect.shapeColor="pink";
}

function draw() {
  background(255,255,255); 
  movrect.x=World.mouseX;
  movrect.y=World.mouseY;
  if(movrect.x-fixdrect.x<fixdrect.width/2+movrect.width/2 && fixdrect.x-movrect.x<fixdrect.width/2+movrect.width/2 && movrect.y-fixdrect.y<fixdrect.height/2+movrect.height/2 && fixdrect.y-movrect.y<fixdrect.height/2+movrect.height/2){
    fixdrect.shapeColor="yellow";
    movrect.shapeColor="yellow";
  } 
  else{
    movrect.shapeColor="pink";
    fixdrect.shapeColor="pink";
  }
  drawSprites();
}