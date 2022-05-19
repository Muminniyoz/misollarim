// for- - 18

// let a=4;
// let n=3;
// let s=1;
// let k=a;
// let p=-1;
// for(let i=1; i<=n; i++) {
// console.log(k);
// s+=p*k;
// k*=a;
// p*=-1;
// }
// console.log(s);





//for 19;
// let n = 6;
// let s = 1;
// for(let i = 1; i <= n; i++) {
//     s *= i; 
// }
// console.log(s);


//for 20;
// let n = 5;
// //faktorial;
// let f = 1;
// let s = 0;
// for(i = 1; i <= n; i++){
//     f *= i;
//     s += f;
// }
// console.log(s);

// for 21
// let n = 5;
// //faktorial;
// let f = 1;
// let s = 1;
// for(i = 1; i <= n; i++){
//     f *= i;
//     s += 1/f;
// }
// console.log(s);




let n=3;
let x=1;
let s=0;
let xn=x;
let f=1;
let p=1;
for(i=1; i<=n;i++) {
    s+=p*xn/f;
    xn*=x*x;
    f*=2*i*(2*i+1);
    p*=-1;
   
}
 console.log(s);
