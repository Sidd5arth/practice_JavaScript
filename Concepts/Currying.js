// Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function add(a){
//     if(arguments.length == 2){
//         return arguments[0] + arguments[1];
//     }
//     else{
//         return function(b) {
//             return a+b;
//         }
//     }
// }
// console.log(add(2)(3));
// console.log(add(2,3));


//Currying //
// const curry = (a) => {
//     return (b) => {
//         return a + b;
//     }
// }
// console.log(curry(3)(6));

// //infinite Currying //
// function sum(a) {
//     return function(b){
//       if(!b){
//           return a;
//       }
//       return sum(a+b);
//     }
//   }
//   console.log(sum(1)(2)(3)(4)(5)(6)());  //21

function addFun(data) {
    let numToStr = "" + data;
    let dataToArr = numToStr.split('').map((data)=>{
        return Number(data);
    });

    let output = dataToArr.reduce((a, b) => a + b);

    if(output > 9){
        return addFun(output);
    }else return output;

}

let num = 5643;
console.log(addFun(num));


