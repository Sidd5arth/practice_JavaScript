function equilibriumPoint(a, n)
{
    let sumRight = 0
    let sumLeft = 0
    for(let i = 0; i < n; i++){
        sumRight += a[i];
    }
    for(let j = 0; j < n; j++){
        sumRight -= a[j];
        if(sumLeft === sumRight) return j+1;
        sumLeft += a[j];
    }
    return -1;
}
const arr = [1,3,5,2,2]
console.log(equilibriumPoint(arr, arr.length ))

// .. n^2 ..
// function equilibriumPoint(a, n)
// {
//     let sumLeft = 0
//     for(let i = 0; i < n; i++){
//         let sumRight = 0;
//         let j = i + 1;
//         while(sumRight < sumLeft){
//             sumRight += a[j];
//             j++;
//             if(sumRight === sumLeft) return i + 1; 
//         }
//         sumLeft += a[i];
//     }
//     return -1;
// }
// const arr = [1,3,5,2,2]
// console.log(equilibriumPoint(arr, arr.length ))