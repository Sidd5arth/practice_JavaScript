// Given an array of integers nums and an integer k, return the number of contiguous subarrays where 
// the product of all the elements in the subarray is strictly less than k.

//O(n)
function getSubarray(nums, k){
    let n = nums.length;
    let i = 0;
    let j = 0;
    let prod = 1;
    let count = 0;

    while(j < n){
        prod *= nums[j];
        while(prod >= k){
            prod /= nums[i];
            i++;
        }
        count += j - i + 1;
        j++;
    }
    return count;
}

let nums = [10,5,2,6], k = 100;
console.log(getSubarray(nums, k));


// O(n^2)    
// for(let i = 0; i< n; i++){
// let prod = 1;
//     for(let j = i; j < n; j++){
//        prod *= nums[j];
//        if(prod < k) count++;
//        else break;
//     }
// }