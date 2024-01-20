class YellowPaint{
  constructor()
  {
    this.xPosition=110;
    this.yPosition=385;
    this.width=50;
    this.height=10;
    
  }
  display()
  {
    fill(160,160,20)
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
  
}