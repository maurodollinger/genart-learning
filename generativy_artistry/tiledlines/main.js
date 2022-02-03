var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = 800;
var step = 50;
var dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr,dpr);

context.lineCap = "square";
context.lineWidth = 3;


function draw(x,y, width, height){
    

    var leftToRight = Math.random() >= 0.9;

    if(leftToRight) {
        context.moveTo(x,y);
        context.lineTo(x + width, y + height);
    } else {
        context.moveTo(x + width, y);
        context.lineTo(x,y + height);
    }

    context.stroke();
}

for (let x = 0; x < size; x+=step) {
    for (let y = 0; y < size; y+= step) {        
        draw(x,y,step,step);
    }    
}
