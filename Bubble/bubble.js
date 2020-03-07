class Bubble{
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
    this.R= random(0,255);
    this.G=random(0,255);
    this.B=random(0,255);
  }
  move(){
    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5);
  }
  display(){
    fill(this.R,this.G,this.B);
    ellipse(this.x,this.y,this.r);
  }


}
