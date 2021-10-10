var player
var shooterImage,shooter_shootingImage
var bg,bgImage
var zombie,zombieImg
var zombieGroup
var heart1,heart2,heart3
var heart1Img,heart2Img,heart3Img

function preload(){
  shooterImage = loadImage("assets/shooter_1.png");
  shooter_shootingImage = loadImage("assets/shooter_3.png")
  bgImage = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImage);
  bg.scale = 1.1;

  player = createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(shooterImage)
  player.scale = 0.3;
  player.setCollider("rectangle",0,0,300,300)
  player.debug = true

  heart1 = createSprite(displayWidth-150,40,20,20)
  heart1.addImage(heart1Img)
  heart1.scale = 0.4
  heart1.visible = false

  heart2 = createSprite(displayWidth-100,40,20,20)
  heart2.addImage(heart2Img)
  heart2.scale = 0.4
  heart2.visible = false

  heart3 = createSprite(displayWidth-150,40,20,20)
  heart3.addImage(heart3Img)
  heart3.scale = 0.4
  

  zombieGroup = new Group()
}

function draw(){
  background("black");

  if(keyDown(UP_ARROW)){
    player.y = player.y-30;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+30;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-30;
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+30;
  }

  if(keyWentDown("space")){
    player.addImage(shooter_shootingImage)
  }

  if(keyWentUp("space")){
    player.addImage(shooterImage)
  }
  enemy();
  drawSprites();
}

function enemy(){
if(frameCount% 50 == 0){
  zombie = createSprite(random(500,1100),random(100,500),40,40)
  zombie.addImage (zombieImg)
  zombie.scale = 0.15
  zombie.velocityX = -3
  zombie.setCollider("rectangle",0,0,400,400)
  zombie.lifetime = 400
  zombieGroup.add (zombie)
  zombie.debug = true
}
}