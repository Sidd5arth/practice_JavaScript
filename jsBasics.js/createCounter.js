// create a counter object --------------------------->>>>
// Create an object with property count, which increments 
// every time count is accessed, initial value is 0.

function createCounter() {
    let count = 0;

    let obj = {
        count: 0
    }


    Object.defineProperty(obj, 'count', {
        get: function() {
            return count++;
        }
    })
    return obj;
}

// function createCounter() {
//     let count = 0;
//     return{
        // get count() {
        //    return count++;
        // }
//     }
// }

let counter = createCounter();
console.log(counter.count);
console.log(counter.count);
console.log(counter.count);