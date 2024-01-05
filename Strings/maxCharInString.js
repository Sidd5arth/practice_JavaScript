function maxChar(str) {
  let mp = new Map();
  let mx = -Infinity;
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (mp.has(str[i])) {
      const val = mp.get(str[i]) + 1;
      mp.set(str[i], val);
      if (val > mx) {
        ans = str[i];
        mx = val;
      }
    } else {
      mp.set(str[i], 1);
    }
  }
  return ans;
}
const str = "this is a javascript code and fins the max char in it";
console.log(maxChar(str));

// useffect(() => {
//     const fetchData = async() => {
//         const data = await fetch("url");
//         const parseData = await data.json();
//         setCountries(parseData);
//     }
//     fetchData();
// }, [])
