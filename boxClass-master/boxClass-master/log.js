class Log {
    constructor(x, y,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50,height,options);
      this.width = 50;
      this.height =height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rotate(angle);
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("yellow");
      rect(0,0, this.width, this.height);
      pop();
    }
}