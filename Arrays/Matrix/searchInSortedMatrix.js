// You are given an m x n integer matrix matrix with the following two properties. Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.
function check(mat, k){
    let m = mat.length;
    let n = mat[0].length;
    let i = 0;
    let j = n-1;


    while(i < m && j < n && i >= 0 && j >= 0){
        let current = mat[i][j];
        if(current === k) return true;
        current > k ? --j : i++;
    }
    return false;
}
const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const target = 30;

console.log(check(matrix, target))