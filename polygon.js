class Polygon{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            density:0.8,
            friction:1
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Polygon.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        imageMode(CENTER);
        fill(255, 244, 0);
        image(this.image,pos.x,pos.y,50,50);
        pop();
    }
}