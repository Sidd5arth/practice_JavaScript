// The static Reflect.ownKeys() method returns an array of the target object's own property keys.
// Arrays under the hood in JavaScript are Objects. Their keys are numbers, and their values are the elements. By default, all arrays also have a property length that reflects the number of elements in that array. In the case of a sparse array, holes do not add the corresponding key to the array.
// Also, the spread operator converts these holes to undefined
// 1. Its an empty array so answer only contains length
// 2. This array [,] is also an empty sparse array hence holes are ignored
// 3. [1,,2] has values defined at index 0 and 2, hence it prints ["0","2","length"]
// 4. Using Spread Operator changes the input array to [1,undefined,2] thus all the keys give following output ["0","1","2","length"]

console.log(Reflect.ownKeys([])) // ["length"]
console.log(Reflect.ownKeys([,])) // ["length"]
console.log(Reflect.ownKeys([1,,2])) // ["0","2","length"]
console.log(Reflect.ownKeys([...[1,,2]])) // ["0","1","2","length"]