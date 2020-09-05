const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box
var box2
var circle
var c2


function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var box_options={
        restitution:2
    }
var box2_options={
    restitution:2
}

var circle_options={
    restitution:2
}

var c2_options={
    restitution:1
}
    ground = Bodies.rectangle(400,790,800,20,ground_options);
    World.add(world,ground);
    c2=Bodies.circle(500,400,40,c2_options)
    circle=Bodies.circle(200,150,20,circle_options)
    box2=Bodies.rectangle(50,50,50,50,box2_options)
    box=Bodies.rectangle(550,200,50,50,box_options)
    console.log(ground);
    World.add(world,box)
    World.add(world,box2)
    World.add(world,circle)
    World.add(world,c2)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rect(box.position.x,box.position.y,50,50)
    rect(box2.position.x,box2.position.y,50,50)
    ellipseMode(RADIUS)
    ellipse(circle.position.x,circle.position.y,20,20)
    ellipse(c2.position.x,c2.position.y,40,40)
}