// -------------------
// const fs = require('fs');
// let qatorlar = fs.readFileSync(0, 'utf-8');
// qatorlar = qatorlar.split('\n');
//----------------------
let [a]="3".split(' ').map(x=> BigInt(x));
let [b]="4".split(' ').map(y=> BigInt(y));
let s=a+b;
console.log(s.toString());