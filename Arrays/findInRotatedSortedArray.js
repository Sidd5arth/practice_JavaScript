// find an element in a rotated sorted array in O(logn)
//array consist of element from 1 to n where n is length of given array.

//original array [1,2,3,4,5,6,7,8,9]
function getIndex(arr, target){
    let n = arr.length;
    let start = 0;
    let end = n - 1;

    while(start <= end){
        mid = Math.floor((start + end)/2);

        if(arr[mid] === target) return mid;

        if(arr[mid] >= arr[start]){
            if(target >= arr[start] && target <= arr[mid]){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }else{
            if(target <= arr[end] && target >= arr[mid]){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return -1;
}


const target = 1
// let arr = [7,8,9,1,2,3,4,5,6]; rotated left
let arr = [4,5,6,7,8,9,1,2,3]; // rotated right

console.log(getIndex(arr, target));
// let arrA = [4,5,6,7,8,9,1,2,3]

