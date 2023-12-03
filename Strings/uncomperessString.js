const isNumber = (val) => !isNaN(parseFloat(val)) && isFinite(Number(val))
function uncompressString(str) {
    let st = [];

    for(let i = 0; i< str.length; i++){
        if(str[i] !== ')'){
            st.push(str[i]);
        }else{
            let count = '';
            let word = '';

            while(st.length && st[st.length - 1] !== '('){
                word = st.pop() + word;
            }
            st.pop();
            while(st.length && isNumber(st[st.length - 1])){
                count = st.pop() + count;
            }
            st.push(word.repeat(Number(count)));
        }
    }
    return st.join('');
}

let str = "3(B2(F1(E))).dev";
console.log(uncompressString(str));
