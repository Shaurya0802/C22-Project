class Box{
    constructor(x,y,w,h) {
      var options = {
          'friction' : 0.8,
          'restitution' : 1.0
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = width; 
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(200);
      rect(pos.x, pos.y, this.width,this.height);
      pop();
    }
  }