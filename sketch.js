const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1;

var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
   box1 = new Box(200,380, 50, 50);
   box2 = new Box(230, 10, 50, 100);
//    box3 = new Box(10,10, 50,100);

   ground = new Ground(200,390,400,20);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    // box3.display();

    ground.display();

}