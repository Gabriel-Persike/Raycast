class Ray{
    constructor(x,y){
        this.pos = {
            x:x,
            y:y
        };
        this.dir = {
            x:1,
            y:0
        };

        this.length = 30;
    }

    show(){
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x + this.dir.x * this.length, this.pos.y + this.dir.y * this.length);
        ctx.stroke();
    }


    cast(wall){
        const x1 = wall.start.x;
        const y1 = wall.start.y;
        const x2 = wall.end.x;
        const y2 = wall.end.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + (this.dir.x * this.length);
        const y4 = this.pos.y + (this.dir.y * this.length);
    }





}