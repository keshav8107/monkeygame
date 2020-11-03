
var monkey , monkey_running,bananascore=0;
var banana ,bananaImage, obstacle, obstacleImage,survive=0
var FoodGroup, obstacleGroup
var score,ground,rando,END=0,PLAY=1,gamestate

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600,400);
    monkey=createSprite(100,335,20,20);
    monkey.addAnimation("run",monkey_running);
    monkey.scale=0.1;
    ground=createSprite(300,370,600,10)
    ground.velocityX=-4;
    ground.x=ground.width/2;
    obstacleGroup=createGroup();
    FoodGroup=createGroup();
  gamestate=PLAY;
}


function draw() {
    background("lightblue")
  if(gamestate===PLAY){
      if (ground.x < 300){
      ground.x = ground.width/2;
    }
   console.log(monkey.y)
  if(keyDown("space")&&monkey.y>320){
    monkey.velocityY=-14;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  text("banana collected:"+bananascore,50,50)
  text("survival rate="+survive,300,50)
  survive=Math.ceil(frameCount/frameRate())
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    bananascore++;
  }
  }
  
 
  spawnBanana();
    spawnObstacles();
  drawSprites();
  
}

function spawnObstacles(){
   if(frameCount%100===0){
     obstacle=createSprite(630,340,20,20);
     obstacle.velocityX=-4;
     obstacle.addImage("stone",obstacleImage)
     obstacle.scale=0.15;
     obstacle.lifetime=350;
      obstacleGroup.add(obstacle);
     
   } 
  
}
function spawnBanana(){
  if(frameCount%120===0){
    rando=Math.round(random(209,290))
    banana=createSprite(630,rando,20,20)
    banana.velocityX=-4;
    banana.addImage("fruit",bananaImage);
    banana.scale=0.1; 
    banana.lifetime=350;
    FoodGroup.add(banana)
      
  }
}



