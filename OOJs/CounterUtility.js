// Implement a function that accepts an integer value and returns a function that can be repeatedly called to return increasing values

function createCounter(initialValue = 0, step = 1) {
    let count  = initialValue;

    return function() {
        count += step
        return count;
    }
}

let countTwo = createCounter(0, 2);
console.log(countTwo());
// console.log(countTwo());
// console.log(countTwo());
// console.log(countTwo());

let countThree = createCounter(3, 6);
console.log(countThree());
console.log(countThree());
console.log(countThree());