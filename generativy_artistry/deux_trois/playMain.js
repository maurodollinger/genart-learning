var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = 800;
var dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr,dpr);
context.lineWidth = 1;
context.lineCap = 'round';

var step = 30;
var division = size /4;

function draw(x,y,width,height,positions){
    context.save();
    context.translate(x+ width/2,y + height /2); // los rota en relacion al centro
    context.rotate(Math.random()* 5);
    context.translate(-width/2,-height/2); // los vuelve a la posicion 0,0

    for(var i = 0; i<= positions.length; i++){
        context.beginPath();
        context.moveTo(positions[i] * width,0);
        context.lineTo(positions[i] * width, height);
        var r = Math.floor(Math.random()*8).toString(8);
        var g = Math.floor(Math.random()*8).toString(8);
        var b = Math.floor(Math.random()*8).toString(8);
        context.strokeStyle = "#" + r + g + b;
        context.stroke();
    }

    context.restore();
}

for(var y = step; y < size -step; y+=step){
    for (var x = step; x < size - step; x+= step){
        if( y < division) {
            draw(x,y,step,step,[0.5]); 
        }
        else if (y < division*2){
            draw(x,y,step,step,[0.2,0.8]);
        }
        else if (y < division*3){
            draw(x,y,step,step,[0.1,0.5,0.9]);
        }
        else {
            draw(x,y,step,step,[0.1,0.3,0.6,0.9]);
        }
    }
}
