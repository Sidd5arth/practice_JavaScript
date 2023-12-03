const a = 'BFE.dev'
if (!typeof a === 'string') {
  console.log('string')
} else {
  console.log('not a string')
}


// console.log(!typeof a)

// since typeof always returns a string (remember "string", "boolean" etc are in fact strings), 
// logical not of a non-empty string will always be false. Hence, "false" compared to a "string" 
// is gonna be false, which means the if block will never be executed.