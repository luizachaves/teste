var caixa;

function setup() {
  createCanvas(400,400);
caixa=createSprite (200,200,20,20)
}

function draw() 
{
  background(30);
  if (keyDown("up")){
caixa.velocityY=-5;

  }
  if (keyDown("down")){
    caixa.velocityY=5;
    
      }
 if (keyDown("left")){
 caixa.velocityX=5;
        
  }

  if (keyDown("right")){
  caixa.velocityX=-5;
    
   }
      
drawSprites();
}




