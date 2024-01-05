function secLargest(input) {
  let mx = -Infinity;
  let secMx = -Infinity;

  for (let i = 0; i < input.length; i++) {
    if (mx < input[i]) {
      mx = input[i];
    }
  }
  console.log(mx);
  const newInput = input.filter((item) => item !== mx);
  console.log(newInput);

  for (let i = 0; i < newInput.length; i++) {
    if (secMx < newInput[i]) {
      secMx = newInput[i];
    }
  }

  return secMx;
}

const input = [1, 2, 3, -3, 11, 7, 1];
const input2 = [1, 4, 7, 7, 2, 4];

console.log(secLargest(input2));
