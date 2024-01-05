// types and ways to write recursion

function sumParametrizedBackward(n, ans) {
  if (n === 0) return ans;
  ans += n;
  return sumParametrizedBackward(n - 1, ans);
}
function sumParametrizedForward(n, ans, i) {
  if (i > n) return ans;
  ans += i;
  return sumParametrizedForward(n, ans, i + 1);
}

function sumFunctionalBackward(n) {
  if (n === 0) return 0;
  return n + sumFunctionalBackward(n - 1);
}

function sumFunctionalForward(n, i) {
  if (n < i) return 0;
  return i + sumFunctionalForward(n, i + 1);
}

// console.log(sumParametrizedBackward(3, 0));
// console.log(sumParametrizedForward(3, 0, 0));
// console.log(sumFunctionalBackward(3));
// console.log(sumFunctionalForward(3, 0));

// function revArr(arr, len, newArr) {
//   if (len < 0) return newArr;
//   newArr.push(arr[len]);
//   return revArr(arr, len - 1, newArr);
// }
function revArr(arr, len, newArr) {
  if (len < 0) return newArr;
  newArr.push(arr[len]);
  return revArr(arr, len - 1, newArr);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const end = arr.length - 1;
const start = 0;
const newArr = [];
console.log(revArr([1, 2, 3, 4, 5, 6, 7, 8], len, newArr));
