const ctx = $("#canvas")[0].getContext("2d");
var walls = [];
var rays = [];


const init = ()=>{
    walls.push(new Wall(300, 100, 300, 300));
    rays.push(new Ray(100,200));
}



function draw(){
    for (const wall of walls){
        wall.show();        
    }

    for (const ray of rays){
        ray.show();
    }


    checkIntersections();

}

function checkIntersections(){
    for (const ray of rays){
        for (const wall of walls){
            ray.cast(wall);
        }
    }
}


init();
draw();