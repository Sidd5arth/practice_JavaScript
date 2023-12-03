//polyfill for Array.prototype.map

Array.prototype.myMap = function (cb) {
    let arr = [];
    for(let i = 0; i < this.length; i++){
        arr.push(cb(this[i], i, this));
    }
    return arr;
}
// Array.prototype.myMap = function(cb, thisObj) {
//     let arr= [];
//     let len = this.length;
//     for(let i = 0; i < len; i++){
//       if(i in this){
//         arr[i] = (cb.call(thisObj, this[i], i, this));
//       }
//     }
//     return arr;
//   }
  
//   console.log([1,2,3].myMap(num => num * 2))
  

function mapfun(arr) {
    const result = arr.myMap((num, i, arr) => {
        return num * 3;
    })
    return result;
}



let arr = [1,2,4,6,9];
console.log(mapfun(arr));