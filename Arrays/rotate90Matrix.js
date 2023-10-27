var rotate = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for(let i = 0; i < m; i++){
        for(let j = i + 1; j < n; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let i = 0; i < m; i++){
        let start = 0;
        let end = n-1;
        while(start < end){
            let temp = matrix[i][start];
            matrix[i][start] = matrix[i][end];
            matrix[i][end] = temp;
            start++;
            end--;
        }
    }
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));