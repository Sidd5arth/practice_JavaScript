// given a multidimentional array flattern it make it one dimension

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

var flatten = function (arr) {
  if (arr.length === 0) return arr;
  var arrfull = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arrfull.push(...flatten(arr[i]));
    } else {
      arrfull.push(arr[i]);
    }
  }
  return arrfull;
};

fullarr = flatten(arr);
console.log(fullarr);
