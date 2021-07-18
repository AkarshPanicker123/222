var gameState="play"
var monster , fireball , hero , bg;
var monsterIMG , fireballIMG , heroIMG , bgIMG
var gameoverIMg, gameover
var lives=5;
var fireballGroup;
function preload() {
  monsterIMG = loadImage("sprites/monster.jpg");
  fireballIMG = loadImage("sprites/fireball.webp");
  heroIMG = loadImage("sprites/hero.png");
  bgIMG = loadImage("sprites/bg.jpg");
  gameoverIMg = loadImage("sprites/gameover.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
  

  monster = createSprite(windowWidth-600,90);
  monster.addImage(monsterIMG);
  monster.velocityX = Math.round(random(-6,6));
  monster.scale = 0.4;
  hero = createSprite(windowWidth/2,windowHeight-100);
  hero.scale = 0.4
  hero.addImage(heroIMG);
  console.log(hero.height)
  fireballGroup = createGroup();
  hero.setCollider("rectangle",0,100,300,800);
  hero.debug=true;
}

function draw(){
    background(bgIMG);
    fill("red");
    text("LIVES: "+lives,windowWidth-300,70);
   
if (gameState === "play"){
  spawnFireballs();
    gameplay();  
}
else if(gameState === "end"){
  var gameover = createSprite(windowWidth/2,windowHeight/2);
  gameover.addImage(gameoverIMg);
  
  hero.destroy();
  monster.destroy();
  fireballGroup.destroyEach();
}
 drawSprites();
// }
function spawnFireballs() {
  //write code here to spawn the clouds
  if (frameCount % 125 === 0) {
    fireball = createSprite(monster.x-10,130);
    fireball.velocityY= 3 ;
    fireball.x=monster.x;
    fireball.addImage(fireballIMG);
    fireball.scale = 0.1;
    
     //assign lifetime to the variable
    fireball.lifetime = 134;
    
   fireballGroup.add(fireball);
    
    //adding cloud to the group
 
  }}}
  function gameplay(){
   
     
    // monster.x=windowHeight-600;
    // hero.x=windowWidth/2;
    
   edges=createEdgeSprites();
   monster.bounceOff(edges);
   if(keyDown("left")){
     hero.x=hero.x-1
   }
   if(keyDown("right")){
    hero.x=hero.x+1
  }
  if(hero.isTouching(fireballGroup)){
     lives=lives-1
    }
    if(lives>=1)
    { gameState="play" }
    else{ gameState="end" }
    //  fireballGroup.setlifeTimeEach(-1);
  
  }