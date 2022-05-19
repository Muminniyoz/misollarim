let canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 600;
canvas.style.width = "100vw";
canvas.style.height = "100vh";
document.body.appendChild(canvas);
let w = canvas.width;
let h = canvas.height;
let ctx = canvas.getContext('2d');
ctx.translate(500, 300);
ctx.rotate(Math.PI);
let rasm = new Image();
rasm.src = "car.jpg";
let x = -150, y = -50;
let burchak = 0;
let dx = 0;
rasm.onload = function(){
    ctx.drawImage(rasm, x, y, 300, 100);
}
document.addEventListener('keydown', function(event){
    console.log(event);
    switch(event.keyCode){
        case 38: dx-= 5; break;
        case 40: dx+= 5; break;
        case 37: if(dx !=0) ctx.rotate(Math.PI / 60); break;
        case 39: if(dx!=0) ctx.rotate(-Math.PI / 60); break;
      
    }

    
});


function chizish(){
    x += dx;
    if(x < 0 || x > w) dx = 0;
    ctx.clearRect(-2000, -2000, 2000, 2000);
    ctx.drawImage(rasm, x, y, 300, 100);
    requestAnimationFrame(chizish);
}
chizish();

function random(a, b){
    return Math.floor(Math.random()*(b-a))+a;
}