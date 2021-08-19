const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ball,maxdrop

function preload(){
    createCanvas(800,500)
    engine = Engine.create();
  world = engine.world;
}

function setup(){
    ball=new Drops(200,450,40);
    
}

function draw(){

var maxdrop=100
for (var i=0;i<maxdrop;i++){
    drops.push(new createDrop(random(0,440)),random(0,400))
}
    ball.display()
}   

