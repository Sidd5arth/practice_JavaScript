// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.

// function rotated(s, g){
//     if(s.length !== g.length) return false;
//     const concat  = s + s;
//     return concat.includes(goal);
// }

// const str = "abcde";
const goal = "cdeab";
// console.log(rotated(str, goal));

var restoreString = function (s, indices) {
  function swap(x, y) {
    let temp = y;
    y = x;
    x = temp;
  }
  for (let i = 0; i < Math.floor((indices.length - 1) / 2); i++) {
    swap(s[i], s[indices[i]]);
  }
  return s;
};

console.log(restoreString("codeleet", goal));
