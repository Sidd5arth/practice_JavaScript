// Given an array arr[] of N non-negative integers representing the height of blocks. 
// If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

function getMaxWater(arr){
    let n = arr.length;
    let leftArr = new Array(n);
    let rightArr = new Array(n);
    leftArr[0] = 0;
    rightArr[0] = 0;
    let leftMax = 0;
    let rightMax = 0;
    let ans = 0;
    for(let i = 0; i < n; i++){ //iterate to find a left Array consisting of max height at that point
        leftMax = Math.max(leftMax, arr[i]);
        leftArr[i] = leftMax;
    }
    for(let i = n-1; i >= 0; --i){ //iterate to find a right Array consisting of max height at that point
        rightMax = Math.max(rightMax, arr[i]);
        rightArr[i] = rightMax;
    }

    for(let i = 0; i < n; i++){
        ans = ans + (Math.min(leftArr[i], rightArr[i]) - arr[i])
    }
    return ans;
}

arr = [3,0,0,2,0,4];
console.log(getMaxWater(arr))