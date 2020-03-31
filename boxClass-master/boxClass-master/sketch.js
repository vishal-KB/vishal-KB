const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var pig;
var log;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,750,70,70);

    box2=new Box(850,750,70,70);

    ground=new Ground(600,790,1200,20);

   pig=new Pig(970,750);

   log=new Log(970,550,200,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
}