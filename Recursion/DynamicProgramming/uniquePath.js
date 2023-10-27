var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    function getPath(i, j, dp) {
    if(i >= m || j >= n) return 0;
    if(i === m - 1 && j === n - 1) return 1;

    if(dp[i][j] > 0){
        return dp[i][j];
    }

    let pathDown = getPath(i, j+1, dp);
    let pathRight = getPath(i+1, j, dp);

    dp[i][j] = pathRight + pathDown;

    return pathRight + pathDown;

}
    return getPath(0, 0, dp);
};

console.log(uniquePaths(3, 7))