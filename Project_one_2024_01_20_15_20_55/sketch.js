var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, road, yellowPaint1,yellowPaint2, yellowPaint3, yellowPaint4,rooflight; 

function setup() {
  createCanvas(400, 400);
 

  b1=new Building();
  b1.position=1;
  b1.floors=24;
  

  b2=new Building();
  b2.position=0.2;
  b2.floors=13;
   
 
  b3=new Building();
  b3.position=2;
  b3.floors=40;
  

  b4=new Building();
  b4.position=4.1;
  b4.floors=10;
  

  b5=new Building();
  b5.position=6;
  b5.floors=15;
  

  b6=new Building();
  b6.position=9;
  b6.floors=13;
  
  b7=new Building();
  b7.position=7;
  b7.floors=24;
  
  b8=new Building();
  b8.position=8;
  b8.floors=17;
  
  b9=new Building();
  b9.position=5;
  b9.floors=15;
  
  b10=new Building();
  b10.position=3;
  b10.floors=9;
  
  
  
  
  road=new Road();
  road.xPosition=0;
  road.yPosition=380;
  
  yellowPaint1=new YellowPaint();
  yellowPaint1.xPosition=110;
  yellowPaint1.yPosition=385;
  
  yellowPaint2=new YellowPaint();
  yellowPaint2.xPosition=190;
  yellowPaint2.yPosition=385;
  
  yellowPaint3=new YellowPaint();
  yellowPaint3.xPosition=270;
  yellowPaint3.yPosition=385;
  
  yellowPaint4=new YellowPaint();
  yellowPaint4.xPosition=30;
  yellowPaint4.yPosition=385;
  
  rooflight=new TriangleLight();
  rooflight.x1=20;
  rooflight.y1=300;
  rooflight.x2=46;
  rooflight.y2=150;
  rooflight.x3=20;
  rooflight.y3=150;

}


function draw() {
  background(20,20,100);
  
  road.display();
  yellowPaint1.display();
  yellowPaint2.display();
  yellowPaint3.display();
  yellowPaint4.display();
  rooflight.display();
  
  fill(390)
  circle(21,290,25)
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

  stroke(0)
  fill(200,175)
  ellipse(20,20,100,100);
  
  
  
}