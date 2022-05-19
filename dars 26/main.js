let canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 800;
const WIDTH = 1000;
const HEIGHT = 800;
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');
let img = new Image();
img.src = "qiz.png";

img.onload = chizish;

let i = 0;
let x = 100;
let y = 200;
let dx = 10;
let dy = -5;
let yurish = 1290;
let k = 1;

let timer = setInterval(function(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    i+=k;
    if(i>4) k = -1;
    if(i == 0) k = 1;
    ctx.drawImage(img, 25 + i*63, yurish, 50, 60, x, y, 200, 200)
  //  x += dx;
   
}, 100);


function chizish(){
    ctx.drawImage(img, 160, 100, 50, 60, 100, 100, 200, 200)

}