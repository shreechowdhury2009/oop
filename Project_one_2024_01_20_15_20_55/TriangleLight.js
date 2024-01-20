class TriangleLight{
  constructor()
  {
    this.x1=10;
    this.y1=10;    
    this.x2=20;
    this.y2=20;
    this.x3=30;
    this.y3=30;
    
    
  
  }  
  display()
  {
      fill(255,255,0,170)
 triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
  }  
  
}
