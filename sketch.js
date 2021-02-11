var state = 0;
var player ; 
var score = 0;       
var roller ;
var obstacle ;
var enemiesGroup,energyGroup;
var obstacle1 , obstacle2 , obstacle3 , bonus1 , bonus2 , bonus3 , bonus4 , bonus5 , bonus6 , playerImg , rollerImg , bg , startImg , start;
function preload(){

	obstacle1 = loadImage("Images/ob1.png");
	obstacle2 = loadImage("Images/ob2.png");
	obstacle3 = loadImage("Images/ob3.png");
    bonus1 = loadImage("Images/bonus1.png");
	bonus2 = loadImage("Images/bonus2.png");
    bonus3 = loadImage("Images/bonus3.png");
    bonus4 = loadImage("Images/bonus4.png");
    bonus5 = loadImage("Images/bonus5.png");
    bonus6 = loadImage("Images/bonus6.png");
	playerImg = loadAnimation("Images/p1.png","Images/p2.png");
	rollerImg = loadAnimation("Images/box.png","Images/box_2.png");
	bg = loadImage("Images/bg.png");
	start = loadImage("Images/start.png");


}
function setup() {
createCanvas(1000,500);
player = createSprite(500,250,50,50);
roller = createSprite(500,230,100,20);
start = createSprite(500,250);
// player.addAnimation(playerImg);
// roller.addAnimation(rollerImg);
// start.addImage(start);


player.shapeColor = "cyan";  
roller.shapeColor = "red";  

enemiesGroup = new Group()
energyGroup = new Group()

}


function draw() {
	background(0)
if(state==0){
player.visible = false;
roller.visible = false;
// start.mousePressed(function(){
// 	start.visible = false;
// 	state = 1;
// })
if(keyDown("space")){
start.visible = false;
state = 1;
}
}
else if(state==1){
	player.visible = true;
	roller.visible = true;

if(keyDown("left")){
player.x=player.x-10;
}
if(keyDown("right")){
player.x=player.x+10;
}
if(keyDown("down")){
	player.y=player.y+10;
	}
if(keyDown("up")){
player.y=player.y-10;
}
	



roller.x = player.x;
roller.y = player.y - 45;


camera.position.y = player.y;
camera.position.x = player.x;
enemies()
energy()

if(enemiesGroup.collide(player)){
	score = score-10;
	enemiesGroup.destroyEach()
	}
	if(energyGroup.collide(player)){
	score = score+10;
	energyGroup.destroyEach()
	}

 }
 if(score<(-10)){
state = 0;
start.visible = true;
player.visible = false;
roller.visible = false;
enemiesGroup.destroyEach();
energyGroup.destroyEach();
score = 0;
start.x = player.x;
start.y = player.y;


 }
  drawSprites();
  textSize(22); 
  text("Score"+score,player.x+400,player.y-200);
  if(score===-50){
    textSize(20);
    text("Game Over",player.x,player.y);
  }

}
function enemies (){
	if(frameCount%150===0){
	var x = player.x + random(-200,+200)+80;
	var y = player.y - random(40,80)+80;
    obstacle = createSprite(x,y,100,30);
	obstacle.shapeColor = "green"
	enemiesGroup.add(obstacle);
	obstacle.lifetime = 500;

	}
}
function energy(){
	if(frameCount%120===0){
	 var x = random(10,1000)+40;
	 var y = player.y-random(80,100)+40;
	 var e = createSprite(x,y,50,30)
	 e.shapeColor = "yellow";
	 energyGroup.add(e);
	 e.lifetime = 100;
	 
	}

}