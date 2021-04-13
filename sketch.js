var car
var wall
var speed
var weight
function setup() {
  speed=random(55,95)
  weight=random(400,1500)
  createCanvas(1600,400);
  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  wall=createSprite(1500,200,50,height/2);
  wall.shapeColour=colour(80,80,80)
}

function draw() {
 
  background(255,255,255);
    
  
  
  
  
 
  if(wall.x-car.x<(car.width+wall.width)/2){
     car.velocityX=0
     var deformation=0.5 *weight*speed*speed/22500
     if(deformation>180){
       car.shapeColour=colour(255,0,0)
     }
     if(deformation<180 && deformation>100){
       car.shapeColour=colour(230,230,0)
     }
     if(deformation<100){
       car.shapeColour=colour(0,255,0)
      }
     
   }
   drawSprites();
}