function getScore(ops) {
  let prev = 0;
  let arr = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "D") {
      prev = 2 * arr[arr.length-1];
      arr.push(prev);
    } else if (ops[i] === "+") {
      prev = arr[arr.length-2] + arr[arr.length-1];
      arr.push(prev);
    } else if (ops[i] === "C") {
      prev = arr[arr.length - 1];
      arr.pop();
    } else {
      let val = Number(ops[i])
      if(val !== NaN){
          arr.push(val);
          prev = arr[arr.length - 1];
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(getScore(["5", "-2", "4", "C", "D", "9", "+", "+"]));
