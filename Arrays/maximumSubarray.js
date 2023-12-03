// Given an integer array nums, find a subarray
// that has the largest sum, and return the product. "Kadane's algorithm"

let kadane = (arr) => {
    let sum = 0;
    let maxSum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum < 0) sum = 0;
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(kadane([1,6,-8,6,-2]))