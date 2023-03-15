var bg;
var bgImg;
var tank;
var tankgun;
var soldier;
var soldier2;
var minipew;
var enemyTank;
var enemysoldier;
var enemy2;
var enemypew;
var ic1
var ic2
var ic3
var b1
var b2

function preload(){
  bgImg = loadImage("./img/bg.png");
  tank = loadImage("./img/tanquecuerpo.png");
  tankgun = loadImage("./img/tankgun.png");
  soldier = loadImage("./img/soldado.png");
  soldier2 = loadImage("./img/soldado2.png");
  minipew = loadImage("./img/minigunner.png");
  enemyTank = loadImage("./img/tanqueenemigo.png");
  enemysoldier = loadImage("./img/soldadoenemigo.png");
  enemy2 = loadImage("./img/enemyboom.png");
  enemypew = loadImage("./img/minigunnerenemy.png");
  ic1 = loadImage("./img/iconMini.png")
  ic2 = loadImage("./img/iconSoldier.png")
  ic3 = loadImage("./img/icontank.png")
  b1 = loadImage("./img/base1.png")
  b2 = loadImage("./img/base2.png")
}
function setup() {
  createCanvas(1233,568);
  sold1ic = createSprite(50, 60)
  sold1ic.addImage("soldier", ic2)
  sold1ic.scale = 3
  min1ic = createSprite(160, 60)
  min1ic.addImage("minig", ic1)
  min1ic.scale = 3
  tank1ic = createSprite(270, 60)
  tank1ic.addImage("tank", ic3)
  tank1ic.scale = 3
  ybase = createSprite(50, 179)
  ybase.addImage("yourBase", b1)
  ybase.scale = 3
  enbase = createSprite(1170, 461)
  enbase.addImage("enemyBase", b2)
  enbase.scale = 3
} 

function draw() {
  background("blue"); 
  image(bgImg, 0, 0, width, height);
  drawSprites();
} 