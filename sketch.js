
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var box;
var rubber;


function setup() {
var canvas=	createCanvas(800, 700);
engine = Engine.create();
	world = engine.world;

hammer=new hammer(400,400,50,50);
box=new box (400,300,50,20);
rubber=new rubber(200,hieght,400,20);
	
Engine.run(engine);hjkk
 Matter.bodies.circle(x,y,radius,[optional],[maxSides])
}

function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  box.dispaly(); 
  rubber.display();

  drawSprites();
 
}



