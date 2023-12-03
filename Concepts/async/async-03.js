// Write a utility which prints numbers starting from an initial value and increment in 
// steps which can be started and stopped by the user, any number of times
const timer = (init, step = 1) => {
    var count = init;
    var intervalId;

    function startTimer(){
        if(!intervalId){
            intervalId = setInterval(() => {
                console.log(count)
                count += step;
            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        intervalId = null;
    }

    return {
        startTimer,
        stopTimer,
    };
}

const timerObj = timer(100, 10);
timerObj.startTimer();
setTimeout(() => {
    timerObj.stopTimer();
}, 5000)


// //  promise all

// function asyncFunc1() {
//     console.log('Started asyncFunc1');
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Completed asyncFunc1');
//             resolve();
//         }, 1000);
//     });
// }

// function asyncFunc2() {
//     console.log('Started asyncFunc2');
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Completed asyncFunc2');
//             resolve();
//         }, 1000);
//     });
// }

// function asyncFunc3() {
//     console.log('Started asyncFunc3');
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Completed asyncFunc3');
//             resolve();
//         }, 1000);
//     });
// }

// async function callbackManager(asyncFuncs) {
//     const promises = asyncFuncs.map((asy) => asy());
//     await Promise.all(promises);
// }

// // driver code
// const asyncFunctions = [asyncFunc1, asyncFunc2, asyncFunc3];
// callbackManager(asyncFunctions);