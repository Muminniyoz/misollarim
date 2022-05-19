// matrix-3
let m = 4, n = 3;
let mat = [];
let a = [2, 3, 6, 8];

for(let i = 0; i<m; i++){
    mat.push([]);
    for(let j = 0; j<n; j++){
        mat[i][j] = a[i];
    }
}
console.table(mat);