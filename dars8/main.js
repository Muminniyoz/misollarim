// surish - 2
let a = [3, 5,7,5,2,6,4,9]
let n = a.length;
let oxirgi = a[n-1];
let oxirgi2 = a[n-2];
for(let i = n - 1; i> 1; i--){
    a[i] = a[i-2];
}
a[0]= oxirgi;
a[1] = oxirgi2;
console.log(a);
