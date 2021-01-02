class Ball{
    constructor(x,y,r) {
        var options = {
            density:1.0,
            frictionAir: 0.005
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);

        
    }

    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);        
        circle(0,0,this.r);
        pop();
    }
}