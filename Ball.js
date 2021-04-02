class Ball {
    constructor(x, y, r) {
      var options = {
        'restitution':1.8,
          'friction':0.4,
          'density':0.09, 
       };
  
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //fill("green")
      ellipseMode(RADIUS)
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }
  