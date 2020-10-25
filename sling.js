class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        push();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB
            stroke(51, 227, 207);
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        pop();
    }
}