// move Zeros containing an array of integers we have to shift all zeros to end on the array
//without modifing the order of non zero elements


//this is a two pointer aproch of solving this
//here starting with "l" as zero and swapping the non-zero ones with the zeros or non zeros
// this swaping ensures that all the non-zero remains at the left side which ultimatly makes all zero to the right!

var moveZeroes = function(nums) {
    let l = 0;
    for(let i = 0; i < nums.length; i++){
          if(nums[i] !== 0){
              const temp = nums[i];
              nums[i] = nums[l];
              nums[l] = temp;
              l++;
          }
        }
        return nums;
};
var nums = [1,3,0,0,2,0];
// var nums = [1,0];
// var nums = [0];
// var nums = [1];
// var nums = [0,1,0];
// var nums = [1,0,1];
// var nums = [0,0,0,0];
console.log(moveZeroes(nums));

// however is can also be done by removing and pushing the zero at the same time!

var moveZeroes = function(nums) {
    for(let i = nums.length-1; i >= 0; i--){
        if(nums[i] === 0){
         nums.splice(i, 1);
         nums.push(0);
        }
    }
    return nums;
};
