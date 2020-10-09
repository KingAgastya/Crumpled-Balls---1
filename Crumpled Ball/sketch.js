
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper_1, ground; 	
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper_1 = new Paper(200,450,70);
	ground = new Ground(width/2,670,width,20);
	dustbin = new Dustbin(1200,650);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paper_1.display();
  ground .display();
  dustbin.display(); 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper_1.body,paper_1.body.position,{x : 130,y : -145});

    
  	}
}