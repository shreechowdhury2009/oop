class Road{
  constructor()
  {
    this.xPosition=0;
    this.yPosition=380;
    this.width=400
    this.height=70
    
    
  }
  display()
  {
    fill(100)
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
  
}