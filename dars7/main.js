// -------------------
const fs = require('fs');
let qatorlar = fs.readFileSync(0, 'utf-8');
qatorlar = qatorlar.split('\n');
//----------------------
// yangi yil sovg'asi
let [n] = qatorlar[0].split(' ').map(x=>parseInt(x));
let [a, b, c] = qatorlar[1].split(' ').map(x=>parseInt(x));

if(n <= a + b + c){
    console.log("Yes");
} else {
    console.log("No");
}