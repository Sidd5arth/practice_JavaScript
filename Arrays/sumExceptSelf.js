// Given an integer array nums, return an array such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].

function getSum(arr){
    let n = arr.length;
    let resArr = [];

    // for(let i = 0; i < n; i++){
    //     let sum = 0;
    //     for(let j = 0; j < n; j++){
    //         if(arr[j] !== arr[i]){
    //             sum += arr[j];
    //             console.log(sum);
    //         }
    //     }
    //     resArr.push(sum);
    // }
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += arr[i];
    }
    for(let i = 0; i < n; i++){
        resArr.push(sum - arr[i]);
    }
    

    return resArr;

}
const nums = [1,2,3,4]
console.log(getSum(nums))