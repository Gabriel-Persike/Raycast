const ctx = $("#canvas")[0].getContext("2d");
var walls = [];
var rays = [];

const init = ()=>{
    walls.push(new Wall(0,0,600,0));
    walls.push(new Wall(600,0,600,600));
    walls.push(new Wall(600,600,0,600));
    walls.push(new Wall(0,600,0,0));


    for (let i = 0; i < 4; i++) {
        walls.push(new Wall(Math.random() * 600, Math.random() * 600, Math.random() * 600, Math.random() * 600));
        
    }

    walls.push(new Wall(300, 100, 300, 300));

    for (let i = 0; i < 360; i+=1) {
        rays.push(new Ray(100,200,i));
    }
}

function draw(){
    ctx.clearRect(0,0,600,600);
    for (const wall of walls){
        wall.show();        
    }

    for (const ray of rays){
        ray.show();
    }

    checkIntersections();
    requestAnimationFrame(draw);
}

function checkIntersections(){
    for (const ray of rays){
        var closest = null;
        var min = Infinity;
        for (const wall of walls){
            var intercept = ray.cast(wall);
            if (intercept){
                var distancia = Math.sqrt(Math.pow(ray.pos.x - intercept.x, 2) + Math.pow(ray.pos.y - intercept.y, 2));
                
                if (distancia < min){
                    min = distancia;
                    closest = intercept;
                }
            }
        }
        if (closest) {
            ctx.beginPath();
                ctx.strokeStyle = "white";
                ctx.moveTo(ray.pos.x, ray.pos.y);
                ctx.lineTo(closest.x, closest.y);
                ctx.stroke();
        }
    }
}

$(document).ready(()=>{
    init();
    requestAnimationFrame(draw);


    $(document).on("mousemove", (e)=>{
        for (const ray of rays){
            ray.move(e.clientX, e.clientY);
        }

        
    });
});