// // sum of all arr element;

Array.prototype.myReduce = function (cb, initialValue) {
  let result = initialValue;

  for (let i = 0; i < this.length; i++) {
    // if it has initial value assign it lese assign the arr[0] while iterating
    result = result ? cb(result, this[i], i, this) : this[i];
  }
  return result;
};

// function reducefun(arr) {
//   const result = arr.myReduce((acc, curr, i, arr) => {
//     return acc + curr;
//   });
//   return result;
// }

// // function reducefun(arr) {
// //     const result = arr.reduce((acc, curr, i, arr) => {
// //         return acc + curr;
// //     })
// //     return result;
// // }

// let arr = [1, 2, 4, 6, 9];
// console.log(reducefun(arr));

let students = [
  { name: "a", rm: "1", marks: 80 },
  { name: "b", rm: "2", marks: 69 },
  { name: "c", rm: "3", marks: 35 },
  { name: "d", rm: "4", marks: 55 },
];

const result = students.reduce((acc, curr) => {
  let currMark = curr.marks;
  console.log(currMark);
  if (currMark < 60) {
    currMark += 20;
    if (currMark > 60) {
      acc += currMark;
    }
  } else {
    acc += currMark;
  }
  return acc;
}, 0);

console.log(result);
