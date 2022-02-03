var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = 800;
var dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr,dpr);
context.lineWidth = 2;

var line,
    odd = false,
    lines = [],
    gap = size / 8;

for(var y = gap /2 ; y<= size; y+= gap){
    odd = !odd;
    line = [];
    for (var x = gap /4 ; x <= size; x+= gap){
        dot = {x: x + (odd ? gap/2 :0), y: y};
        //line.push(dot);
        line.push({
            x : x + (Math.random()*.8 - .4) * gap + (odd ? gap /2 :0),
            y : y + (Math.random()*.8 - .4) * gap 
        })
       // context.beginPath();
        // ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
        //context.arc(dot.x,dot.y,1,0,2 * Math.PI, true);
        //context.fill();
    }
    lines.push(line);
}

var dotline;
odd = true; // impar

for(var y = 0; y < lines.length -1; y++){
    odd = !odd;
    dotline = [];
    // suma los puntos
    for(var i = 0; i < lines[y].length; i++){
        dotline.push(odd ? lines[y][i] : lines[y+1][i]);
        dotline.push(odd ? lines[y+1][i] : lines[y][i]);
    }
    for (var i = 0; i < dotline.length -2 ; i++){ // le resta los ultimos 2
        drawTriangle(dotline[i],dotline[i+1],dotline[i+2]);
    }
}

function drawTriangle(pointA, pointB, pointC){
    context.beginPath();
    context.moveTo(pointA.x, pointA.y);
    context.lineTo(pointB.x,pointB.y);
    context.lineTo(pointC.x, pointC.y);
    context.lineTo(pointA.x,pointA.y);
    context.closePath();
    var gray = Math.floor(Math.random()*16).toString(16);
    context.fillStyle = "#" + gray + gray + gray;
    context.fill();
    context.stroke();
}