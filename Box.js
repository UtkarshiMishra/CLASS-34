class Box{
    constructor(x,y,width,height) {
        var options = {
            density:1.0,
            friction:0.7,
            restitution:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(6);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}