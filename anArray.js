// this is an actual array 
const a = new ArrayBuffer(6);
console.log(a);

const a8 = new Uint8Array(a);
a8[0] = 45
console.log(a);

// on console you can see each individual bits or spaces in memory that can hold data