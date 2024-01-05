console.log(a);
console.log(b);
console.log(c);
var a = "hi";
let b = "yo";
const c = "ho";

// console.log(window.a);
console.log(this.a);
console.log(this.b);

// The scope of a variable declared with var for variables declared outside any function will be global i.e. window.
// let however, does not create properties of the window object when declared globally (in the top-most scope) See this
// let and const are hoisted and they are in temporal dead zone (time between initialisation and assigning the value)
// var is is hoisted and is undefinde and is on the window object not in scope like let and const
/////////////////////////////////////////////////////////////////

// with let we cannot re initialize values
// let x = 9;
// let x = 7;
// var x = 3;
// but var can
// var y = 9;
// var y = 3;
