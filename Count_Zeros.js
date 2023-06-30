//countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// so the first solution comes in mind is to loop throw it and spill the zero counts right?

// function countZeroes(arr) {
//     var count = 0;
//        for(let i = 0; i < arr.length; i++){
//            if(arr[i] === 0){
//                count++;
//        }
//     }
//     return count;
// }
// console.log(countZeroes([1, 1, 0, 0, 0, 0])); // 4

// but take a look the complexity is O(n)!

// can it be done in less time ?

// NOTE: Given that the condition "all 1s first followed by all 0s" we can apply binary search or
// an approch known as Divide and Conquer.


// Time Complexity - O(log n)

function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (arr[middle] === 1) left = middle + 1;
      else right = middle - 1;
    }
  
    return arr.length - left;
  }
  
  console.log(countZeroes([1, 1, 1, 1, 1, 0])); // 1
  console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
  console.log(countZeroes([1, 1, 1, 0, 0, 0])); // 3
  console.log(countZeroes([0, 0, 0])); // 3
  console.log(countZeroes([1, 1, 1, 1])); // 0
  console.log(countZeroes([1, 0])); // 1
  console.log(countZeroes([0])); // 1
  console.log(countZeroes([])); // 0