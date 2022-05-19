let box = document.getElementById('box');

for(let i = 1; i<=4; i++){
    let img = new Image();
    img.src = "./rasm/rasm" +i+".jpg";
    img.id = 'id'+i;
    box.appendChild(img);
}
// container.appendChild(rasmlar[0]);
let i = 1;
setInterval(function(){
    box.style.left = -(i++)*400 + 'px';
    console.log(box);
    if(i == 4) i = 1;
}, 3000);

let k = 20;
let parchalar = [];
let y = [];
let x = [];
for(let i = 0; i< 100; i++){
    parchaYarat(i);
}
setInterval(function(){
    for(let i = 0; i<100; i++){
        y[i]+= random(0, 15)-3;
        x[i] += random(0, 30)-15; 
         parchalar[i].style.top = y[i]+ 'px';
        parchalar[i].style.left = x[i] + 'px';
        if(y[i]>window.screen.height) {
            parchalar[i].remove();
            parchaYarat(i);
        };
     
        
    }
}, 100);

function random(a, b){
    return Math.floor(Math.random()*(b-a))+a;
}

function parchaYarat(i){
    let span = document.createElement('span');
    span.innerHTML = "*";
    span.classList.add('parcha');
    let left = random(0, window.screen.width);
    span.style.left = left + 'px';
    x[i] = (left);
    let top = -random(0, window.screen.height);
    span.style.top =  top + 'px';

    span.style.fontSize = random(18, 32) + 'px';
    parchalar[i] = span;
    y[i] = top;
    document.body.appendChild(parchalar[i]);
}