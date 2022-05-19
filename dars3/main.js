// int - 14
let a = 324; 
let birlar = a % 10; // 4
let onlar  = parseInt(a / 10) % 10; // 2
let yuzlar = parseInt(a / 100);  // 3
let natija = birlar * 100 + onlar * 10 + yuzlar;
console.log(natija);