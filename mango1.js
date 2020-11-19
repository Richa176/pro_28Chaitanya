class mango {
    constructor(x, y, r) {
      var options = {
        isStatic:true,
        restitution :0,
        friction :1,
          
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("mango.png");
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
    
      //this.image=fill("pink")   
     //console.debug("this.image")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
     
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      fill(255);
      image(this.image, 0,0,this.r,this.r);
     
     // ellipse(0, 0, this.radius,this.radius);
      
      pop();
    }
  }