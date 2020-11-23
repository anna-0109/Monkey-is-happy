
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

var survivalTime=0;

var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400)
 monkey= createSprite(180,370,40,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.15;
  
  
 
  
  ground= createSprite(20,390,1800,5);
  ground.velocityX=-3;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
  
 background("lightblue")
 
  text("Survival Time:"+survivalTime,250,30);
  if(gameState===PLAY)
    {
       survivalTime= Math.ceil(frameCount/frameRate());
      food();
     obstacleG();
  
       if(ground.x<0)
    {
      ground.x=ground.width/2;
    }

  if(keyDown("space"))
  {
    monkey.velocityY=-10;
  }

  monkey.velocityY=monkey.velocityY+1;

    }
  if(gameState===END)
    {
      
    }
 
  if(obstacleGroup.isTouching(monkey))
    {
      gameState=END;
      
    }
  drawSprites();
  
  monkey.collide(ground);
  
 
  if(gameState===END)
    {
      ground.velocityX=0;
      obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      survivalTime=0;
      obstacleGroup.setLifetimeEach(0);
      FoodGroup.setLifetimeEach(0);
    }
    
}

function food()
{
  if(frameCount%80===0)
    {
       banana= createSprite(550,30,10,10);
      banana.velocityX=-3;
       banana.addImage(bananaImage);
       banana.scale=0.1;
      banana.y=Math.round(random(120,200));
      banana.lifetime=180;
      
      FoodGroup.add(banana);
    }
}

function obstacleG()
{
  if(frameCount%300===0)
    {
    obstacle = createSprite(580,360,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-3;
    obstacle.lifetime=180;
      
      obstacleGroup.add(obstacle);
    }
  
}




