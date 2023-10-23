// |1 5 6|
// |3 8 9|
// |7 4 0|
// Given martix print in spiral order => [1,5,6,9,0,4,7,3,8];

const getSpiralMat = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let top = 0;
    let right = n-1;
    let bottom = m-1;
    let ans = [];

    while(top <= bottom && left <= right){
        for(let i = left; i <= right; i++){
            ans.push(matrix[top][i]);
        }
        top++;
        for(let i = top; i <= bottom; i++){
            ans.push(matrix[i][right]);
        }
        right--;
        if(top <= bottom){
        for(let i = right; i >= left; i--){
            ans.push(matrix[bottom][i]);
        }
        bottom--;
        }
        if(left <= right){
        for(let i = bottom; i >= top; i--){
            ans.push(matrix[i][left]);
        }
        left++;
        }
    }
    return ans;
}
let matrix = [[1,5,6],[3,8,9],[7,4,0]]
console.log(getSpiralMat(matrix))