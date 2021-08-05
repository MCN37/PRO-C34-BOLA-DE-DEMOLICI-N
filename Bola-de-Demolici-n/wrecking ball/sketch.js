
function setup() {
  createCanvas(3000, 800);

}

function draw() {
  background(180);
  

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
