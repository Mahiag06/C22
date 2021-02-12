function setup() {
  createCanvas(800,400);
  mahiengine = Matter.Engine.create();
  mahiworld = mahiengine.world ;
  var ground_options = {
    isStatic : true 
  }
  ground = Matter.Bodies.rectangle(200,390,200,20,ground_options);
Matter.World.add(mahiworld,ground);
var ball_options = {
  restitution:1 
}
ball = Matter.Bodies.circle(200,100,20,ball_options);
Matter.World.add(mahiworld,ball);
}
function draw() {
  background(255,255,255);  
  Matter.Engine.update(mahiengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}