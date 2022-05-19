let canvas = /** @type {HTMLCanvasElement} */  (document.getElementById('canvas'));
let ctx = canvas.getContext('2d');

let w = canvas.width;
let h = canvas.height;

// tana qismi to'rtburchak
ctx.beginPath();
    ctx.rect(50, 150, w - 2 * 50, h - 150 - 10);
    ctx.stroke();
ctx.closePath();

// tomning tepa qismi
ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(w - 200, 20);
    ctx.stroke();
ctx.closePath();

// tomming chap qismi
ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(30, 165);
    ctx.stroke();
ctx.closePath();

// tomming o'ng qismi
ctx.beginPath();
    ctx.moveTo(w - 200, 20);
    ctx.lineTo(w-30, 165);
    ctx.stroke();
ctx.closePath();
canvas.addEventListener('click', function(event){

});

requestAnimationFrame(animate);
let i = 1;
function animate(){
    ctx.clearRect(0,0, w,h);
    // egri chiziq
    ctx.lineWidth = 5;
ctx.beginPath();
    ctx.moveTo(200, 400);
    ctx.bezierCurveTo(150, 330, 200, 300, 200, 300);
    ctx.bezierCurveTo(220, 280 , 280,280, 400, 280);
    ctx.stroke();
ctx.closePath();
    
requestAnimationFrame(animate);
}
