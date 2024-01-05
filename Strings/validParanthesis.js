// check if given string is valid for equal number of paranthesis with thier respective open and close order

var isValid = function (s) {
  let curr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      curr.push(s[i]);
    }
    if (s[i] === ")") {
      if (curr[curr.length - 1] !== "(") return false;
      else curr.pop();
    }
    if (s[i] === "]") {
      if (curr[curr.length - 1] !== "[") return false;
      else curr.pop();
    }
    if (s[i] === "}") {
      if (curr[curr.length - 1] !== "{") return false;
      else curr.pop();
    }
  }
  if (curr.length > 0) return false;
  return true;
};

//Test Cases
// const para = "(){}[]"
const para = "({[]})";
// const para = "[)"
// const para = "["
// const para = "[((({"

console.log(isValid(para));
