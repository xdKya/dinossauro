var dinossauro, dino_img;
var borda;


function preload(){
  //pre carrega os arquivos do jogo
  dino_img = loadAnimation("trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200);

  dinossauro = createSprite(50,180,20,20);
  dinossauro.addAnimation("running",dino_img);
  dinossauro.scale = 0.5;

  borda = createEdgeSprites();
}
 
function draw(){
  background('white');

  if(keyDown("space")){
    dinossauro.velocityY = -10;
  }

  //gravidade
  dinossauro.velocityY = dinossauro.velocityY + 1;

  dinossauro.collide(borda);

 drawSprites();
}


