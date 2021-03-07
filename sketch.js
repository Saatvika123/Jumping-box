var sprite1, sprite2, sprite3, sprite4
var movingSprite
var music




function preload() {
cat=loadAnimation("cat1.png","cat2.png","cat3.png")
mouse=loadAnimation("mouse1.png","mouse2.png","mouse3.png", "mouse4.png")
}

function setup(){
    createCanvas(1000,800);
   cat=createSprite(200,300,50,50
   mouse=createSprite(500,20,30,20)
   mouse.addAnimation(mouse1.png, "mouse")
  

}

function draw() {

    background("white");
    Text(mouseX+','+mouseY, 10, 45);
   if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    cat.addAnimation("catLastImage",catImg3);
    cat.changeAnimation("catLastImage");
    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg2)
cat.changeAnimation("catRunning");
}
  

}
