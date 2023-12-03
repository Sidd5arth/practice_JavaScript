let a = 'bfe.dev'
a[0] = 'c'
console.log(a)

console.log(Object.getOwnPropertyDescriptors(a))

// since string are not writeable object unlike arrays in javascript