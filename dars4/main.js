// bool - 22

let a = 152;

let r1 = parseInt(a / 100);
let r2 = parseInt(a / 10) % 10;
let r3 = a % 10;

let usuvchi = r1 <= r2 && r2 <= r3;
let kamayuvchi = r1 >= r2 && r2 >= r3;

let natija = usuvchi || kamayuvchi;

console.log(natija);