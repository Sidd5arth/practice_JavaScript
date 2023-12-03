// function wordReverse(str){
//     let arr = str.split(' ');
//     return arr.reverse().join(' ');
// }
// function eachWordReverse(str){
//     let arr = str.split(' ');
//     let newArr = [];
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         let curr = arr[i];
//         let newStr = curr.split('').reverse().join('');
//         newArr.push(newStr);
//     }
//     return newArr.join(' ')
// }
function eachWordReverse(str) {
    let arr = str.split(' ').map((item) => item.split('').reverse().join('')).join(' ');
    return arr;
}
const str = "this is javaScript code";
console.log(eachWordReverse(str));
