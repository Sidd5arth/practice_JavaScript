function printFirstNegativeInteger(k, arr) {
    let i = 0;
    let j = 0;
    let temp = [];
    let ans = [];

    while( j < arr.length){
        if(arr[j] < 0){
            temp.push(arr[j]);
        }
        if(j-i+1 < k){
            j++;
        }
        else if(j-i+1 === k){
            if(temp.length === 0){
                ans.push(0);
            }else{
                ans.push(temp[0])
                if(arr[i] < 0){
                    temp.shift();
                }
            }
            i++;
            j++;
        }
    }
    return ans;
}

console.log(printFirstNegativeInteger(2, [-8, 2, 3, -6, 10]));
