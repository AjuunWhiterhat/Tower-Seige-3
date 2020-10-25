class BaseClass{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.7,
            density:0.6,
            friction:1,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("blue.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(RADIUS);
        strokeWeight(2);
        translate(pos.x,pos.y);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}

