function bounceOff(fixrect,movingrect){

    if(movingrect.x-fixrect.x<=movingrect.width/2+fixrect.width/2 && fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2)
      
    {
      movingrect.velocityX = movingrect.velocityX*(-1);
      fixrect.velocityX= fixrect.velocityX*(-1);
    } 
    else if (movingrect.y-fixrect.y<=movingrect.height/2+fixrect.height/2 && fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2) {
    
      movingrect.velocityY = movingrect.velocityY*(-1);
      fixrect.velocityY= fixrect.velocityY*(-1);
    
    }
    else{ 
      fixrect.shapeColor="green"; 
      movingrect.shapeColor="green";
     } 
  
  }