// for-11
let n = 3;
let s = 0;
// 1-usul.
// for(let i = n; i<=2*n; i++){
//     s += (i*i);
// }
// console.log(s);

// 2-usul
for(let i = 0; i<=n; i++){
    s += (n + i) ** 2;
}
console.log(s);