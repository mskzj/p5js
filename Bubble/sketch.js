let bubbles=[]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for(var i=0;i<bubbles.length;i++){
   
    noStroke();
    bubbles[i].move();
    bubbles[i].display();
  }
}

//拖拽产生bubble
function mouseDragged(){
  let r= random(10,50);
  bubbles.push(new Bubble(mouseX,mouseY,r));

}
//使用鼠标滑轮清空
function mouseWheel(){
  bubbles=[];
}

