const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,bodies;
var ball,box1,box2,box3,box4,box5;
var rope;
var ground;

function preload() {

}

function setup() {
    createCanvas(800,600)
    engine = Engine.create()
    world = engine.world;

    ground = new Ground(400,600,800,20);

    box1 = new Box(600,550,50,50);
    box8 = new Box(600,550,50,50);
    box9 = new Box(600,550,50,50);
    box10 = new Box(600,550,50,50);
    box2 = new Box(600,500,50,50);
    box11 = new Box(600,500,50,50);
    box12 = new Box(600,500,50,50);
    box13 = new Box(600,500,50,50);
    box3 = new Box(600,450,50,50);
    box14 = new Box(600,450,50,50);
    box15 = new Box(600,450,50,50);
    box4 = new Box(600,400,50,50);
    box16 = new Box(600,400,50,50);
    box17 = new Box(600,400,50,50);
    box5 = new Box(600,350,50,50);
    box6 = new Box(600,350,50,50);
    box7 = new Box(600,350,50,50);

    ball = new Ball(200,200,50)
    rope = new Rope(ball.body,{x: 400,y: 200})

}

function draw() {
    background (0)
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    ball.display();
    rope.display();
    
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY})
}

function mouseReleased() {
    rope.fly();
}