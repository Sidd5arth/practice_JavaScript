// only reverse the occureance of vowels in the string

const isVowels = (val) => {
    return (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u' || 
           val === 'A' || val === 'E' || val === "I" || val === "O" || val === "U");
} 
var reverseVowels = function(s) {
    let arr = s.split('');
    let i = 0;
    let j = arr.length-1;

    while(i < j){
        while(i < j  && !isVowels(arr[i])) i++;
        while(i < j && !isVowels(arr[j])) j--;

        let temp = s[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
};

const c = reverseVowels("hello");
console.log(c);
