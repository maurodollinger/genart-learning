var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = 800;
var dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr,dpr);
context.lineWidth = 2;

var squareSize = 40;
var randomDisplacement = 15;
var rotateMultiplier = 20;
var offset = 10;

function draw(width,height){
    context.beginPath();
    context.rect(-width/2,-height/2,width,height);
    context.stroke();
}

for (let i = squareSize; i <= size - squareSize; i+=squareSize) {
    for (let j = squareSize; j <= size - squareSize; j+=squareSize) {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        var rotateAmt = j / size * Math.PI /180 * plusOrMinus * Math.random() * rotateMultiplier;

        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        var translateAmt = j / size * plusOrMinus * Math.random() * randomDisplacement;
        
        context.save(); // guarda el estado actual,
        context.translate(i + translateAmt + offset,j + offset);
        context.rotate(rotateAmt);
        draw(squareSize,squareSize);
        context.restore(); // restaura el estado, x, y
    }   
}