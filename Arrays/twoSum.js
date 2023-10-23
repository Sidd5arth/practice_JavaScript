// Input: nums = [2,7,11,15], target = 9

function twoSum(nums, target){
    let mp = new Map();

    for(let i = 0; i < nums.length; i++){
        const n = target - nums[i];
        if(mp.has(n)){
            const index = mp.get(n);
            return [index, i];
        }
        mp.set(nums[i], i);
    }
    return [];
}
const nums = [3,2,4];
const target = 6;
console.log(twoSum(nums, target))