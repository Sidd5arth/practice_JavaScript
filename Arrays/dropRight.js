// Drop Right While
// Implement a function that excludes elements from 
// the end of an array until the predicate returns false

function dropRight(arr, fn) {
    let i = arr.length - 1;
    while(i >= 0 && fn(arr[i])){
        i--;
    }   
    return arr.slice(0, i+1)
}


function isEven(num) {
    return num % 2 === 0;
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(dropRight(arr, isEven));