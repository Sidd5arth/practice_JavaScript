// find an element in a rotated sorted array in O(logn)
//array consist of element from 1 to n where n is length of given array.

//original array [1,2,3,4,5,6,7,8,9]
function getNum(arr){
        let i = 0;
        let j = arr.length - 1;

        while(i < j){
            let mid = Math.floor((i+j)/2);
            arr[mid] < arr[j] ? j = mid : i = mid + 1;
        }
        return arr[i];
}


const target = 1
// let arr = [7,8,9,1,2,3,4,5,6]; //rotated left
let arr = [4,5,6,7,8,9,1,2,3]; // rotated right

console.log(getNum(arr));

