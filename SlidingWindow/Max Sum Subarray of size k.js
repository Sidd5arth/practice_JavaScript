function subarrSum(k, arr){
    let i = 0;
    let j = 0;
    let max = 0;
    let sum = 0;

    while(j < arr.length){
        sum += arr[j];
        if(j-i+1 < k){
            j++;
        } 
        else if(j-i+1 === k){
            max = Math.max(max, sum);
            sum -= arr[i]
            i++;
            j++;
        }
    }
    return max;
}
console.log(subarrSum(2, [100, 200, 300, 400]));