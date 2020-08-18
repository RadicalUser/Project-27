
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobDiameter=200;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	top1=new Roof(350,100,500,30);
	bobOject1= new Bob(330,300,30);
	bobOject2=new Bob(300,300,30);
	bobOject3=new Bob(420,300,30);
	bobOject4=new Bob(360,300,30);
	bobOject5=new Bob(390,300,30);

	rope1=new Rope(bobOject1.body,top1.body,-30,0);
	rope2=new Rope(bobOject2.body,top1.body,-60,0);
	rope3=new Rope(bobOject3.body,top1.body,60,0);
    rope4=new Rope(bobOject4.body,top1.body,0,0);
	rope5=new Rope(bobOject5.body,top1.body,30,0);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 // bobOject1.x=mouseX;
  //bobOject1.y=mouseY;

 
  
  drawSprites();
  top1.display(); 
  bobOject1.display();
  bobOject2.display();
  bobOject3.display();
  bobOject4.display();
  bobOject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobOject2.body,bobOject2.body.position,{x:-85,y:85});
		
	 
		 }
}


