function isChar(char) {
    if(typeof char === 'string' && char.length === 1) return true;
    else return false;
}
let str = "A man, a plan, a canal: Panama"
for(let i = 0; i < str.length; i++){
    console.log(isChar(str[i]))
    
}
