var student, studentImg
var book
var bookGroup
var obstacle
var obstacleGroup
var score = 0

var gameState = "serve"; 

function preload(){
 studentImg = loadImage("Assets/student1.png");
 backgroundImg = loadImage("Assets/bg.png"); 
 englishBookImg = loadImage("Assets/englishbook.png");
 mathBookImg = loadImage("Assets/Mathbook.png")
 historyBookImg = loadImage("Assets/historybook.png")
 geographyBookImg = loadImage("Assets/geographyBook.png")
 scienceBookImg = loadImage("Assets/ScienceBook.png")
 startButtonImg = loadImage("Assets/startButton.png")
 teacherImg = loadImage("Assets/shoutingTeacher.png")
 examImg = loadImage("Assets/examPaper.png");
 tryAgainImg = loadImage("Assets/tryAgain.jpeg");
 coinImg = loadImage("Assets/coin.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //bg = createSprite(300,200,windowWidth,windowHeight);
  //bg.addImage(backgroundImg)
  //bg.scale = 1

  student = createSprite(750,520, 50, 50);
  student.addImage(studentImg);
  student.scale = 0.9

  //englishBook = createSprite(130,0,20,20)
  //englishBook.addImage(englishBookImg)
  //englishBook.scale = 0.3

  //mathBook = createSprite(370,0,20,20)
  //mathBook.addImage(mathBookImg)
  //mathBook.scale = 0.3

  //historyBook = createSprite(690,0,20,20)
  //historyBook.addImage(historyBookImg)
  //historyBook.scale = 0.3

 //geographyBook = createSprite(1008,0,20,20)
 //geographyBook.addImage(geographyBookImg)
 //geographyBook.scale = 0.3

  //scienceBook = createSprite(1280,0,20,20)
  //scienceBook.addImage(scienceBookImg)
  //scienceBook.scale = 0.3

  tryAgain = createSprite(740,350,200,100)
  tryAgain.addImage(tryAgainImg);
  tryAgain.visible = false;

  coin = createSprite(80,80,100,100);
  coin.addImage(coinImg)
  coin.scale = 0.3

  

  start = createSprite(740,350,200,100);
  start.addImage(startButtonImg);
  start.scale = 0.9

   bookGroup = new Group()
   obstacleGroup = new Group()

  student.visible = false;
  //englishBook.visible = false
  //mathBook.visible = false
  //historyBook.visible = false
  //geographyBook.visible = false
  //scienceBook.visible = false




 



  
}

function draw() {
  background(backgroundImg);
  //background("black")
  student.x = mouseX

  if(gameState==="play"){
    spawnBooks();
    spawnObstacles();
   
    if(bookGroup.isTouching(student)){
     score = score+1 
     
    }

    if(obstacleGroup.isTouching(student)){
     reset()
    }
  
  
  }
  
if(mousePressedOver(start)){
  gameState="play"

  start.visible = false;
  student.visible = true;

if (mousePressedOver(tryAgain)){
  //gameState = "serve";
  tryAgain.visible = false;

}

  

}

  drawSprites();
  fill("red")
  textSize(35)
  text(score, 150,100)
}

function spawnBooks(){
 if (frameCount%60===0){
 book = createSprite(Math.round(random(50,1200)), 50, 100, 100)
 var rand = Math.round(random(1,5)); 
   switch(rand){
   case 1:book.addImage(englishBookImg)
   break;
     case 2: book.addImage(mathBookImg)
     break;
     case 3: book.addImage(historyBookImg)
     break;
     case 4: book.addImage(geographyBookImg)
     break;
     case 5: book.addImage(scienceBookImg)
     break;
     default:break
     
   }
   book.scale = 0.3
   book.velocityY = 7
   book.lifetime = 300
   bookGroup.add(book);
   }
  
 }

 function spawnObstacles(){
 if (frameCount%60===0){
   obstacle = createSprite(Math.round(random(200,1000)),50,100,100)
   var rand = Math.round(random(1,2));
   switch(rand){
     case 1: obstacle.addImage(teacherImg)
     break; 
     case 2: obstacle.addImage(examImg)
     break;
     default:break
   }
   obstacle.scale = 0.3
   obstacle.velocityY = 7
   obstacle.lifetime = 300
   obstacleGroup.add(obstacle)
 }
 }

function reset(){
  gameState = "end"
  tryAgain.visible = true;
  student.visible = false;
  obstacleGroup.destroyEach();
  bookGroup.destroyEach();
}




