// given a multidimentional array flattern it make it one dimension

const arr = [[1, 2, 3], 22, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

var flatten = function (arr) {
  if (arr.length === 0) return arr;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // const flat = ;
      newArr.push(...flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const fullarr = flatten(arr);
console.log(fullarr);

// var flatten = function (arr) {
//   if (arr.length === 0) return arr;
//   var arrfull = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       const res  = flatten(arr[i])
//       arrfull.push(...res);
//     } else {
//       arrfull.push(arr[i]);
//     }
//   }
//   return arrfull;
// };
