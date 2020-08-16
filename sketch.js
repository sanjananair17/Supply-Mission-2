var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftSide, rightSide, bottomSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	imageMode(CENTER);
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height - 15, width,10);
	groundSprite.shapeColor=color(255);

	leftSprite=createSprite(300, 630, 20, 100);
	leftSprite.shapeColor=color("red");

	bottomSprite=createSprite(400, 670, 200, 20);
	bottomSprite.shapeColor=color("red");

	rightSprite=createSprite(500, 630, 20, 100);
	rightSprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2, 200, 10, 10, {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	leftSide = Bodies.rectangle(300, 610, 20, 100);
	World.add(world, leftSide);

	bottomSide = Bodies.rectangle(400, 650, 200, 20);
	World.add(world, bottomSide);

	rightSide = Bodies.rectangle(500, 610, 20, 100);
	World.add(world, rightSide);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic (packageBody, false);
  }
}



