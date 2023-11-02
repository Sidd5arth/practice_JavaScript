// Given an integer array nums, find a subarray
// that has the largest product, and return the product.

function getMaxProd(nums){
    let prod = 1;
    let mx = -Infinity; // max product can be negative
    let n = nums.length;

    for(let i = 0; i < n; i++){
        prod *= nums[i];
        mx = Math.max(mx, prod);
        if(prod === 0) prod = 1;
    }
    prod = 1;
    for(let i = n - 1; i >= 0; --i){
        prod *= nums[i];
        mx = Math.max(mx, prod);
        if(prod === 0) prod = 1;
    }
    return mx;
}

// let nums = [-2, 2, 1]
// let nums = [-2]
// let nums = [0]
let nums = [0, 0, -1]
// let nums = [-2, 0, 1]
console.log(getMaxProd(nums));