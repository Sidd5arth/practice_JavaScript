// Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

function add(a){
    if(arguments.length == 2){
        return arguments[0] + arguments[1];
    }
    else{
        return function(b) {
            return a+b;
        }
    }
}
console.log(add(2)(3));
console.log(add(2,3));


//infinite Currying //
function add(a){
    return function(b) {
        if(b){
            return add(a+b);
        }
        else {
            return a;
        }
    }
}
console.log(add(3)(4)(6)());