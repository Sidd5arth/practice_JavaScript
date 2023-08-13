// write a function called truncate that checks th elength of a given string - str, and if 
// it surpasses a sepecific max length, it replace the end of the string with elliipsis charecter "..."

function truncate(str, maxlen){
    if(str.length > maxlen){
        return str.slice(0, maxlen) + "...";
    }else{
        return str;
    }
}

console.log(truncate("wooble was wobbling", 10));