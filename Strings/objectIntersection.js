function intersection(input1, input2) {
    let obj = {};
    for(let item in input1){
        if(input1.hasOwnProperty(item) && input2.hasOwnProperty(item)){
            if(input1[item] === input2[item]){
                obj[item] = input1[item];
            }
        }
    }
    return obj;
}



const input1 = {a:1, b:21, c:3, d:10, e:12}
const input2 = {a:2, e:12, b:21, f:6, d:1}

console.log(intersection(input1, input2));
