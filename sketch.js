var ball ,edges ,paddle ,brick ;
var score;
var gameState;

function setup(){
createCanvas(400,400);

gamestate = "serve";

montarjogo();
}

function createRow(y,color){
for (i = 0;i <6;i++){
brick = createSprite(65 + 54 *i,y + 50,50,25);
brick.shapeColor = color;
brinks.add(brick);
   }
}

function brickHit(ball,brick){
brick.remove();
score +=5;
}

function montarjogo(){
ball = createSprite(200,250,20,20);
ball.shapeColor = "white";
  
paddle = createSprite(200,350,120,10);
paddle.shapeColor = "white";
  
edges = createEdgeSprites();
  
brinks = createGroup();
  
createRow(0,"red");
createRow(29,"yellow");
createRow(29 + 29,"green");
createRow(29 +29 +29 ,"blue");

score= 0;
}

function draw(){
background(0)
  
textSize(20);
text('score: '+ score,100,20);

if(gamestate == "serve"){
text('pressione "ESPAÇO"para iniciar',60,200);
if(keyDown("SPACE")){
gamestate ="play";
ball.velocityY = -5;
ball.velocityX = -6;
}
}  

if(gamestate == "play"){
if(!brinks[0]){
textSize(50)
text('You Win',55,200);
ball.velocityY = -0;
ball.velocityX = -0;
ball.destroy();
paddle.destroy();
}


for(i = 0;i<3;i++){
ball.bounceOff(edges[i]);
}

paddle.collide(edges);
ball.bounceOff(paddle)
ball.bounceOff(brinks,brickHit);

if(keyDown(LEFT_ARROW)){
paddle.velocityX= -6;
}

if(keyDown(RIGHT_ARROW)){
paddle.velocityX= 6;
}


if (ball.y> 390) {
ball.velocityY = 0;
ball.velocityX = 0;
ball.y = 250;
ball.x = 200;
  
paddle.x=200;

paddle.veloictyX = 0;

gamestate="gameOver";
}
}

if (gamestate == "gameOver"){
text('pressione "ESPAÇO"para iniciar',60,200);
if(keyDown("SPACE")){
score = 0;
gamestate ="play";

ball.velocityY = -5;
ball.velocityX = -6;

createRow(0,"red");
createRow(29,"yellow");
createRow(29 + 29,"green");
createRow(29 +29 +29 ,"blue");

createRow(0,"red");
createRow(29,"yellow");
createRow(29 + 29,"green");
createRow(29 +29 +29 ,"blue");

bricks.destroy();
bricks.destroy();
bricks.destroy();
bricks.destroy();
bricks.destroy();
bricks.destroy();
bricks.destroy();
}
}
drawSprites()
}