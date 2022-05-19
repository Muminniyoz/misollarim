// fun - 26
function isPrime5(k){
    let i = 1;
    while(i<k){
        i *= 5;
    }
    return i == k;
}
let a = 12, b=25, c = 100, d = 125, e =  1225;
let soni = 0;
if(isPrime5(a)) soni++;
if(isPrime5(b)) soni++;
if(isPrime5(c)) soni++;
if(isPrime5(d)) soni++;
if(isPrime5(e)) soni++;
console.log(soni);