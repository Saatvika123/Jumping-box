var sprite1, sprite2, sprite3, sprite4
var movingSprite
var music
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas((800,600);
movingSprite=createSprite(random(10,750)300,20,20)
movingSprite.shapeColor=("white
"")
movingSprite.velocityX=3;
movingSprite.velocityY=3;

sprite1=createSprite(100,598,180,20)
sprite1.shapeColor=("red")

sprite2=createSprite(300,596,180,20)
sprite2.shapeColor=("green")

sprite3=createSprite(500,600,180,20)
sprite3.shapeColor=("blue")

sprite4=createSprite(700,590,180,20)
sprite4.shapeColor=("yellow")

}


function draw() {
    background(rgb(169,169,169));
  
if(movingSprite.x<0){
music.stop()
movingSprite.velocity=3
}else if(movingSprite.x>800){
music.stop()
movingSprite.velocityX=-3



if(isTouching(movingSprite,sprite4)){
music.play()
movingSprite.shapeColor=("yellow")
bounceOff(movingSprite,sprite4)
}

else if(isTouching(movingSprite,sprite3)){
music.stop()
movingSprite.shapeColor=("blue")
bounceOff(movingSprite,sprite3)
}

else if(isTouching(movingSprite,sprite2)){
music.stop()
movingSprite.shapeColor=("green")
movingSprite.velocityX=0
movingSprite.velocityY=0
}

else if(isTouching(movingSprite,sprite1)){
    music.stop()
    movingSprite.shapeColor=("red")
    bounceOff(movingSprite,fixSprite1)
}

if(movingSprite.y<0){
music.stop()
movingSprite.velocityY=3
}

drawSprites()
}
