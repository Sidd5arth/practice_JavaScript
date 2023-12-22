// function getNthNum(n) {
//     if(n === 1) return '1';

//     let prev = getNthNum(n - 1);

//     let curr = '';
//     let count = 1;
// console.log(prev)
//     for(let i = 1; i < prev.length; i++){
//         if(prev[i] === prev[i - 1]){
//             count++;
//         }else{
//             curr += count + prev[i - 1];
//             count = 1;
//         }
//     }
//     console.log(curr)
//     curr += count + prev[prev.length - 1];
//     return curr;
// }

//   console.log(getNthNum(5))

// //   pattern
// //   1
// //   11
// //   21
// //   1211
// //   111221
// //   312211

let k = {
  yo: 1,
  er: 2,
  f: 3,
};
console.log(k.length);
for (let item in k) {
  console.log(item);
}
