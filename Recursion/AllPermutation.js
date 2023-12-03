// function permute(str, l, r) {
// //   if (l == r) console.log(str);
// //   else {
// //     for (let i = l; i <= r; i++) {
// //       str = swap(str, l, i);
// //       permute(str, l + 1, r);
// //       str = swap(str, l, i);
// //     }
// //   }
// // }

// // function swap(a, i, j) {
// //   let temp;
// //   let charArray = a.split("");
// //   temp = charArray[i];
// //   charArray[i] = charArray[j];
// //   charArray[j] = temp;
// //   return charArray.join("");
// function getper(str, arr, temp, freq){
//     if(temp.length === str.length){
//         arr.push([...temp]); 
//         return; 
//     }
//     for(let i = 0; i < str.length; i++){
//         if(!freq[i]){
//             temp.push(str[i]);
//             freq[i] = 1;
//             getper(str, arr, temp, freq);
//             temp.pop();
//             freq[i] = 0
//         }
//     }
//     return arr;
// }
// let arr= [];
// let temp= [];
// let freq = new Array(str.length).fill(0);
// console.log(freq)
// return getper(str, arr, temp, freq);
// }

// let str = "ABC";
// let n = str.length;
// let res = permute(str, 0, n - 1);
// const randomPermutation = Math.floor(Math.random() * n);
// console.log(res[randomPermutation]);


function shuffle(arr) {
    function getPermute(arr, res, temp, freq) {
      if(temp.length === arr.length){
        res.push([...temp]);
        return;
      }
      for(let i = 0; i < arr.length; i++){
        if(!freq[i]){
          temp.push(arr[i]);
          freq[i] = 1;
          getPermute(arr, res, temp, freq);
          temp.pop();
          freq[i] = 0;
        }
      }
    }
  
    let n = arr.length;
    let res = [];
    let temp = [];
    let freq = new Array(n).fill(0);
    const permutations = getPermute(arr, res, temp, freq);
    console.log(permutations)
    // const index = Math.floor(Math.random() * n);
    // return permutations[index];
  }

  let arr = "ABC";
  shuffle(arr);
//   console.log(shuffle(arr));