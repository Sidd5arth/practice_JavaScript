var a = 'hi'
let b = 'yo'
console.log(this.a) // "BFE" 
console.log(this.b) // undefined

// The scope of a variable declared with var for variables declared outside any function will be global i.e. window.
// let however, does not create properties of the window object when declared globally (in the top-most scope) See this

/////////////////////////////////////////////////////////////////



