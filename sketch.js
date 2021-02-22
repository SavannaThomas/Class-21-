var fixedRect, movingRect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300, 200, 50, 80);
  fixedRect.shapeColor = "blue";  

  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "blue";

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "blue";

  gameobject2 = createSprite(400,100,50,50);
  gameobject2.shapeColor = "blue";
  
}

function draw() {
  background("black");  //0(black) - 255(white) //rgb

  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  
 // ball.isTouching(playerPaddle);
 // fixedRect.isTouching(movingRect);

  if( isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";
  }
  else if( isTouching(gameobject1, movingRect)){
    gameobject1.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";
  }
  else if( isTouching(gameobject2, movingRect)){
    gameobject2.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";
  }
  else {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    gameobject1.shapeColor = "blue";
    gameobject2.shapeColor = "blue";
  }

  drawSprites();
}

