// Given a string s, remove duplicate letters so that every letter appears once and only once. 
// make sure the result is the smallest in lexicographical order among all possible results.

// i.e find all the possible substring without duplicate ans return the smallest amonng all.

function remove(str) {
    let arr = str.split('');
    let trc = new Set();
    let result = "";

    for(let i = 0; i < arr.length; i++){
        let curr = arr[i];
        if(!trc.has(curr)){
            while(result.length > 0 && curr < result[result.length - 1] && str.indexOf(result[result.length - 1], i) !== -1){
                trc.delete(result[result.length - 1]);
                result = result.slice(0, -1);
            }
            result += curr;
            trc.add(curr);
        }
    }
    return result;
}

console.log(remove("cbacdcbc"))
