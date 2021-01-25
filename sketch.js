var garden,gardenImg;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var tom,tomImg1,tomImg2,tomImg3;
function preload() {
    gardenImg = loadImage("images/garden.png");
    jerryImg1 = loadImage("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3 = loadImage("images/jerryFour.png");
    tomImg1 = loadImage("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3 = loadImage("images/tomFour.png");


}

function setup(){
    createCanvas(1000,700);

    garden = createSprite(200,300);
    garden.addImage("garden",gardenImg);
    garden.scale = 0.9;

    jerry = createSprite(85,500);
    jerry.addImage("mouse",jerryImg1);
    jerry.scale = 0.1;

    tom = createSprite(500,500);
    tom.addImage("cat",tomImg1);
    tom.scale = 0.1;


}

function draw(){
    //Write condition here to evalute if tom and jerry collide
    if(tomImg2.x - jerry.x <(tom.width - jerry.width)/2){
        tom.addAnimation("tomStop",tomImg3);
        tom.changeAnimation("tomStop",tomImg3);
        tom.velocityX = 0;
    }
    
    if(keyDown("LEFT_ARROW")){
        tom.addAnimation("tomRunning",tomImg2);
        jerry.addAnimation("dancing",jerryImg2);    
    }


keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tomImg2);
        tom.changeAnimation("tomRunning",tomImg2);
        jerry.addAnimation("dancing",jerryImg2),
        jerry.changeAnimation("dancing",jerryImg2);
    }


}
