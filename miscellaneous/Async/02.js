const createPromise = () => Promise.resolve(1)

function func1() {
  createPromise().then(console.log)
  console.log(2)
}

async function func2() {
  await createPromise()
  console.log(3)
}

console.log(4)
func1()
func2()

// first 4 is printed the func1 will be called thereafter func2 --------> 4
// func1 right after createPromise it sets log to microtask queue and execute console log --------> 2
// func2 is asynchronus and will wait, the rest of the function queues as a microtask.
// as soon callstack becomes empty excute console.log in .then from func1 ---------> 1
// and execute console log 3 from func2 --------> 3