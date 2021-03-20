var cat,cat1,cat2,cat3,cat4
var mouse,mouse1,mouse2,mouse3,mouse4,background
function preload() {
    //load the images here
    background1=loadImage("garden.png")
    cat1=loadAnimation("cat1.png")
    cat2=loadAnimation("cat2.png","cat3.png")
    //cat3=loadAnimation("images/cat3.png")
    cat4=loadAnimation("cat4.png")
    mouse1=loadAnimation("mouse1.png")
   mouse2=loadAnimation("mouse2.png","mouse2.png")
    mouse4=loadAnimation("mouse4.png")
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.scale=.2
    mouse=createSprite(200,600)
    mouse.scale=.15
    cat.addAnimation("catSleeping",cat1)
    mouse.addAnimation("mouseStanding",mouse1)
   
}

function draw() {

    background(background1);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catLastImg",cat4)
    cat.x=300
    cat.changeAnimation("catLastImg")
    mouse.addAnimation("mouseLastImg",mouse4)
    mouse.changeAnimation("mouseLastImg")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",cat2)
      cat.changeAnimation("catRunning")


      mouse.addAnimation("mouseStanding",mouse2)
      mouse.changeAnimation("mouseStanding")

      mouse.frameDelay=25;
  }
   

}
