// given a string find max repeated charecters in the string
// if there are multiple charecter of same maximum number return it as array if charecters.
//test -> "abbcc" => output -> ["b", "c"]
//test -> "abc" => output -> ["a", "b", "c"]
//test -> "abbdcccc" => output -> "c"
//test -> "1234455" => output -> ["4", "5"]
//test -> "123" => output -> ["1", "2", "3"]
//test -> "123330444455" => output -> "4"

function mxRep(str) {
  let mp = new Map();
  let mx = -Infinity;
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    if (mp.has(str[i])) {
      mp.set(str[i], mp.get(str[i]) + 1);
      mx = Math.max(mx, mp.get(str[i]));
    } else {
      mp.set(str[i], 1);
      mx = Math.max(mx, mp.get(str[i]));
    }
  }

  mp.forEach((value, key) => {
    if (value === mx) {
      ans.push(key);
    }
  });
  if (ans.length > 1) return ans;
  else return ans[0];
}

console.log(mxRep("12234555"));
