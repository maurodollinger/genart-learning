var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = 800;
var dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr,dpr);
context.lineWidth = 2;


var step = 30;
var lines = [];

for (let i = step; i <= size - step; i+=step) {
    var line = [];
    for (let j = step; j <= size - step; j+= step) {
        var distanceToCenter = Math.abs(j - size/2);
        var variance = Math.max(size /2 - 200 - distanceToCenter,0);
        var random = Math.random() * variance / 2 * -1 ;
        var point = {x: j, y: i + random};
        line.push(point);
    }
    lines.push(line);
}
console.log(lines);

for (let i = 5; i < lines.length; i++) {
    context.beginPath();
    context.moveTo(lines[i][0].x,lines[i][0].y);

    for (let j = 0; j < lines[i].length -2; j++) {
        var xc = (lines[i][j].x + lines[i][j+1].x) / 2;
        var yc = (lines[i][j].y + lines[i][j+1].y) / 2;
        //context.lineTo(lines[i][j].x,lines[i][j].y);
        context.quadraticCurveTo(lines[i][j].x,lines[i][j].y,xc,yc);
    }

    context.save();
    context.globalCompositeOperation = "destination-out";
    context.fill();
    context.restore();
    context.stroke();
}