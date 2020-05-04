let angle = 1;
let graphics;
let love;
let timer = 10;
var t;



function setup() {
  createCanvas(800, 800, WEBGL);
  graphics = createGraphics(200,200);
  graphics.background(255);
  love = createGraphics(500,200);
  //love.background(0);
  love.fill(255);
  love.textAlign(CENTER);
  love.textSize(18);
  //love.text('What is Space?',100,150);
  //cam = createCapture(VIDEO);
  //cam.size(400,400);
}

function draw() {
  background(0);
  //love.text('What is Space?',100,150);
  ambientLight(255);
  //image(cam,0,0);
  rotateX(angle*0.2);
  rotateY(angle*0.3);
  rotateZ(angle*0.4);
  angle = angle + 0.009;
 texture(love);
  push();
    box(500);
  pop();
  //torus(60,10);
    
    if (frameCount % 60 == 0 && timer < 11 && timer > 5) { 
     

      timer --;     
    //print(timer);
      t = 'Not One Thing At A Time';
   
      love.text(t,100,150);
  
  }
    

  /*if (frameCount % 60 == 0 && timer <=5)
  {
 redraw();
  //box(500);
    t = 'spcxxxx';
    //t.Remove();
    timer --;     
    print(timer);
    love.text(t,100,150);
  }*/
  
}