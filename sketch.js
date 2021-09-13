/*


write your own story

*/

var ninja,ninjaImage;
var background1, backgroundImage;
var obstacle 
var score;

function preload(){
  
 ninjaImage = loadAnimation("ninja1.png","ninja2.png","ninja3.png","ninja4.png","ninja5.png","ninja6.png");
  backgroundImage = loadImage("city background.jpg")
  


}



function setup() {
  createCanvas(600,200);
  background1 = createSprite(200,180,400,20);
  background1.addImage("city background",backgroundImage);
  background1.x = background1.width /2;
  background1.velocityX = -2; 


  ninja = createSprite(50,150,20,50,);
  ninja.addAnimation("running",ninjaImage)
  ninja.scale = 0.6;


 
}

function draw() {

  background("skyblue")
  
 if(background1.x <270){
  background1.x = background1.width /2;
 }
  
  drawSprites();

}

