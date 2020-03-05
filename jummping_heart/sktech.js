let h1;
let h2;
var heart_arr=[];
function setup() {
  createCanvas(400, 400,WEBGL);
  
  
  // h1=new heart(10,0,0,0,255,0,0);
  // h2=new fish(30,0,0,0,255,0,0);
}

function draw() {
  background(0);
//   h1.move();
//   h1.display();
  
  //点击产生像素
  if(mouseIsPressed){
    push();
    var n=new heart(random(1,5),mouseX-width/2,mouseY-height/2,0,random(200,255),0,random(100,155))
    //show position 
    //print(mouseX,mouseY,mouseX-width/2,mouseY-height/2);
    heart_arr.push(n);
    pop();
  }
  noStroke();
  //展示像素
  for(var i=0;i<heart_arr.length;i++){
    push();
    heart_arr[i].move();
    heart_arr[i].display();
    pop();
  }
  
}


