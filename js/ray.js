class Ray {
	constructor(x, y, angle) {
		this.pos = {
			x: x,
			y: y,
		};

        // Convert angle from degrees to radians
        var radians = angle * (Math.PI / 180);

        var dirX = Math.cos(radians);
        var dirY = Math.sin(radians);

        this.dir = {
            x: dirX,
            y: dirY
        };

		this.length = 10;
	}

	show() {
		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.moveTo(this.pos.x, this.pos.y);
		ctx.lineTo(this.pos.x + this.dir.x * this.length, this.pos.y + this.dir.y * this.length);
		ctx.stroke();
	}

	cast(wall) {
		const x1 = wall.start.x;
		const y1 = wall.start.y;
		const x2 = wall.end.x;
		const y2 = wall.end.y;

		const x3 = this.pos.x;
		const y3 = this.pos.y;
		const x4 = this.pos.x + this.dir.x * this.length;
		const y4 = this.pos.y + this.dir.y * this.length;

		const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
		if (denominator == 0) {
			return false;
		}

		var t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
		var u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

        if (t > 0 && t < 1 && u > 0) {
            var x = x1 + t * (x2 - x1);
            var y = y1 + t * (y2 - y1);

            return { x: x, y: y };
        } else {
            return false;
        } 
	}

    move(x,y){
        this.pos.x = x;
        this.pos.y = y;
    }
}
