class heart{
  constructor(Boxsize,posX,posY,posZ,r,g,b){
    this.Boxsize=Boxsize;
    this.posX=posX;
    this.posY=posY;
    this.posZ=posZ;
    this.r=r;
    this.g=g;
    this.b=b;
    this.interval=(10/8);
    this.speed=random(-1,-3);
    this.height=posY;
  }
  move(){
    if ((this.posY+4*this.interval*this.Boxsize)>height/2||this.posY<=this.height){
        this.speed*=(-1);
       
        }
  this.posY+=this.speed;
     // print(this.posY,height/2,this.speed);
  }
  display(){
    //line0
    fill(this.r,this.g,this.b);
    translate(this.posX,this.posY,this.posZ);
    box(this.Boxsize);
    for(var i=0;i<3;i++){
    translate(-(this.interval)*this.Boxsize,0,0);
      box(this.Boxsize);
    }
    translate((this.interval)*3*this.Boxsize,0,0);
     for(i=0;i<3;i++){
    translate((this.interval)*this.Boxsize,0,0);
      box(this.Boxsize);
    }
    //line-1
    translate(-(this.interval)*2*this.Boxsize,-(this.interval)*this.Boxsize,0);
    box(this.Boxsize);
    translate((this.interval)*this.Boxsize,0,0);
    box(this.Boxsize);
    
    translate(-(this.interval)*3*this.Boxsize,0,0);
    box(this.Boxsize);
    translate(-(this.interval)*this.Boxsize,0,0);
    box(this.Boxsize);
    
    //line1
    translate(-(10/8)*this.Boxsize,(this.interval)*2*this.Boxsize,0);
    box(this.Boxsize);
  for(i=0;i<6;i++){
    translate((this.interval)*this.Boxsize,0,0);
      box(this.Boxsize);
    }
    
    //line
    let r=1;
    for(var j=0;j<3;j++){
      if(j%2==0){r=-1;}
      else{r=1}
      translate(r*(this.interval)*this.Boxsize,(this.interval)*this.Boxsize,0);
    box(this.Boxsize);
    for(i=0;i<4-j*2;i++){
    translate(r*(this.interval)*this.Boxsize,0,0);
      box(this.Boxsize);
    }
    
    }
  }
}
