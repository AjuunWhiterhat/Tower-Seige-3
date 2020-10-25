class Grey extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.visibility = 255;
        this.image = loadImage("grey.jpg");
    }

    display(){
        if(this.body.speed < 3){
            super.display();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visibility = this.Visibility - 5;
             tint(255,this.Visibility);
             image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
             pop();
           }
          }

          score(){
            if (this.Visibility < 0 && this.Visibility > -1005){
              score++;
            }
          }
        

}
