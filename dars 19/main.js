// -------------------
const fs = require('fs');
let qatorlar = fs.readFileSync(0, 'utf-8');
qatorlar = qatorlar.split('\n');
//----------------------
// robo - massiv
let [g1,g2,g3,g4,g5,g6,g7] = qatorlar[0].split(" ").map(x=>parseInt(x));
let s = parseInt(qatorlar[1]);
let ss = g1 + g2 + g3 + g4 + g5 + g6 + g7;
if(ss > s){
    console.log(0);
} else {
    console.log(s - ss);
}