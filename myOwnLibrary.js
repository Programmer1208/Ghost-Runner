 //a=ghost;
 //d=invisClimber;
 /*function isCollision(){

    //Collision ALgorithm
  
  if(ghost.position.x-invisClimber.position.x<=a.width/2+invisClimber.width/2
    && invisClimber.position.x-ghost.position.x<=a.width/2+invisClimber.width/2
    && ghost.position.y-invisClimber.position.y<=ghost.height/2+invisClimber.height/2
    && invisClimber.position.y-ghost.position.y<=ghost.height/2+invisClimber.height/2)
  {
   //  movingSprite.shapeColor="red";
   //  fixedSprite.shapeColor="lime";

   ghost.velocityX=0;
   ghost.velocityY=0;
  }  
  else
  {
   // movingSprite.shapeColor="yellow";
   // fixedSprite.shapeColor="yellow";
   
   ghost.velocityX=3; 
   ghost.velocityY=3;
  }
   

}*/

function spawnDoors()
{
  if (frameCount%250===0)
  {
     
    door=createSprite(Math.round(random(90,723)),0,20,20);
    door.addImage(door_Img)
    door.velocityY=3;
    door.scale=1.5;

    door.depth= ghost.depth-1;
    
     climber=createSprite(door.x,100,20,20)
     climber.addImage(climber_Img);
     climber.velocityY=3;
     climber.depth= ghost.depth-1;

      invisClimber=createSprite(climber.x,110,20,20);
      invisClimber.debug=true;
      invisClimber.velocityY=3;
      invisClimber.setCollider("rectangle",0,0,100,2);

      invisClimber.depth=ghost.depth-1;
      
  }
  
   
   
  



}

























































