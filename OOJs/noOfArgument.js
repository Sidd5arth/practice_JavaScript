// Number of Arguments
// Implement a function that returns the number of arguments it was called with
function countArg(...args) {
    return args.length;
}

console.log(countArg("f1", "f2", "f3"));