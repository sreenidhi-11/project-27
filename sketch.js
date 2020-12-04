const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob, bob2, bob3, bob4, bob5;
var roof;
var rope;
var bobDiameter=80;


function preload()
{
	
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(340,480,39.6);
	bob2 = new Bob(420,480,39.6);
	bob3 = new Bob(500,480,39.6);
	bob4 = new Bob(580,480,39.6);
	bob5 = new Bob(660,480,39.6);
	roof = new Roof(500,100,400,20);
	rope1 = new Chain(bob.body,roof.body,-bobDiameter*2,0)
	rope2 = new Chain(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Chain(bob3.body,roof.body,bobDiameter*0,0)
	rope4 = new Chain(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Chain(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("yellow");
  fill("white");
  bob.display();
  fill("black");
  bob2.display();
  fill("white");
  bob3.display();
  fill("black");
  bob4.display(); 
  fill("white");
  bob5.display();
  fill("black");
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
  textSize(30);
 fill ("black");
  text("PRESS UP_ARROW KEY TO START",100,30);
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-800,y:-500})
	}
}





