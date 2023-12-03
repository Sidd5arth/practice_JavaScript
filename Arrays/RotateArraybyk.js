// var rotateArray = function(nums, k) {
//     let n = nums.length;
//     k = k % n;
//     function rotate(start, end){
//         while(start < end){
//             let temp = nums[start];
//             nums[start] = nums[end];
//             nums[end] = temp;
//             start++;
//             end--;
//         }
//     }
//     // left rotate
//     // rotate(0, n-1);
//     // rotate(0, k-1);
//     // rotate(k, n-1);
    
//     // right rotate
//     rotate(0, n-1);
//     rotate(0, n-k-1);
//     rotate(n-k, n-1);

//     return nums;
// };

// console.log(rotateArray([1,2,3,4,5,6], 2));

function rotateTwo(input) {
    let first = input.shift();
    let second = input.shift();
    input.push(first)
    input.push(second);

    return input;

}
const input = [2,7,11,4,-2]
console.log(rotateTwo(input));

