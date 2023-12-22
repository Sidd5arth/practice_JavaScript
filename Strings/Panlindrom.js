// given a strin check if it is a palindrome 

// function pal(str){
//     const checkStr = str.split('').reverse().join('');
//     if(checkStr === str) return true;
//     else return false;
// }
// console.log(pal("128971"))
function pal(str){
    let i = 0;
    let j = str.length-1;
     while(i < j){
        if(str[i] !== str[j]) return false;
        else{
            i++;
            j--;
        }
     }
     return true;
}
console.log(pal("121"))