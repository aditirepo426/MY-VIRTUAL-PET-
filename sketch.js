//Create variables here
var  dog, dogImg , happyDogImg ,dataBase ,happyDog, foodS, foodStock ,dogeat , shreya , shreyaImg ;
var foodRemaining = 30;

function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
  shreyaImg = loadImage("Shreya.jpg");
	
}

function setup() {

  dataBase = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(380,290,50,50);
  dog.addImage(dogImg,0,0);
  dog.scale = 0.2;

  shreya = createSprite(200,250,50,50);
  shreya.addImage(shreyaImg,0,0);
  shreya.scale = 1.5;


  foodStock = dataBase.ref("Food");
  foodStock.on("value",readStock);

  
}


function draw() {  

  background(0, 129, 85);

  
    if(keyDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage(happyDogImg,0,0);
        foodRemaining = foodRemaining - 1;

        if(foodRemaining === 0){
          foodRemaining = 0;
        }
    }
  


  drawSprites();
  
  textSize(20);
  fill("yellow");
  text("PRESS THE UP ARROW TO FEED JIMMY MILK",40,50);
  textSize(15);
  text("Food Remaining:" + foodRemaining,40,100);

}

function readStock (data){
    foodS = data.val();
}

function writeStock (x){

  dataBase.ref('/').update({
    Food: x
  })
}