var canvas;
var music;
var block1,block2;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
   block1=createSprite(100,350,100,20);
   block1.shapeColor="red";
   block2=createSprite(250,350,100,20);
   block2.shapeColor="blue";
   ball=createSprite(200,200,20,20);
   ball.shapeColor="white";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
  
    if(ball.isTouching(block1)){
        music.play()
        ball.shapeColor="red";
        ball.velocityY=-5;
    }
    if(ball.isTouching(block2)){
        music.play()
        ball.shapeColor="blue";
        ball.velocityY=0;
        ball.velocityX=0;
        music.stop()
        

    }
    if(keyDown("LEFT_ARROW")){
        ball.velocityX=-5;
    }
    if(keyDown("RIGHT_ARROW")){
        ball.velocityX=5;

    }
    if(keyDown("UP_ARROW")){
        ball.velocityY=-5;
    }
    if(keyDown("DOWN_ARROW")){
        ball.velocityY=5;
    }
    
    
  drawSprites();
    //add condition to check if box touching surface and make it box
}
