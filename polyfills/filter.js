//greater than 2

Array.prototype.myFilter = function (cb) {
    let arr = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            arr.push(this[i]);
        }
    }
    return arr;
}


function filterfun(arr) {
    const result = arr.myFilter((num, i, arr) => {
        return num > 2;
    })
    return result;
}

// Actuall
// function filterfun(arr) {
//     const result = arr.filter((num, i, arr) => {
//         return num > 2;
//     })
//     return result;
// }




let arr = [1,2,4,6,9];
console.log(filterfun(arr));