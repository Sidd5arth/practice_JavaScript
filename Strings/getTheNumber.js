function getNum(str) {
  const numToDigit = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let asr = str.split(" ");
  //   if (asr.length !== 10) return "not valid";
  let ans = "";

  for (let i = 0; i < asr.length; i++) {
    if (asr[i] === "double") {
      for (let j = 0; j < 2; j++) {
        ans += numToDigit[asr[i + 1]];
      }
      i++;
    } else if (asr[i] === "triple") {
      for (let k = 0; k < 3; k++) {
        ans += numToDigit[asr[i + 1]];
      }
      i++;
    } else {
      ans += numToDigit[asr[i]];
    }
  }
  return Number(ans);
}

const num = "five one zero triple four eight zero double two";
console.log(getNum(num));
