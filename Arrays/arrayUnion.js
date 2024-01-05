function Union(a, b) {
  let arr = [];
  let n = a.length;
  let m = b.length;
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] < b[j]) {
      arr.push(a[i]);
      i++;
    } else if (a[i] > b[j]) {
      arr.push(b[j]);
      j++;
    } else {
      arr.push(a[i]);
      i++;
      j++;
    }
  }

  while (i < n) {
    arr.push(a[i]);
    i++;
  }
  while (j < m) {
    arr.push(b[j]);
    j++;
  }
  return arr;
}

console.log(Union([1, 6, 8, 7], [2, 4, 7, 8, 9, 0]));

//form non duplicate array elements
