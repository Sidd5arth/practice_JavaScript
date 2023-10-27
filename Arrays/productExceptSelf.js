// Given an integer array nums, return an array such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].

function getProduct(arr){
    let n = arr.length;
    let leftArr = new Array(n);
    let rightArr = new Array(n);
    leftArr[0] = 1;
    rightArr[n-1] = 1;
    resArr = new Array(n);

    for(let i = 1; i < n; i++){
        leftArr[i] = leftArr[i - 1] * arr[i - 1];
    }
    console.log(leftArr);
    for(let i = n-2; i >= 0; i--){
        rightArr[i] = rightArr[i + 1] * arr[i + 1];
    }
    console.log(rightArr);
    for(let i = 0; i < n; i++){
        resArr[i] = rightArr[i] * leftArr[i];
    }

    return resArr;

}
nums = [1,2,3,4]
console.log(getProduct(nums))