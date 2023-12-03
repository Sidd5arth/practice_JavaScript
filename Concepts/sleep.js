// Sleep
// Implement a function that pauses for a specified duration before resuming execution
// In JavaScript, you can't create a sleep function that blocks the entire program's execution because 
// JavaScript is single-threaded and non-blocking. However, you can implement a function that simulates a "sleep" or delay 
// effect using setTimeout or async/await. Here's an example using setTimeout:
function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("slept for 2 second");
        }, 2000);
    })
}

async function delay() {
    console.log("started the nap");
    const result = await sleep();
    console.log("finished the nap");
    console.log(result);
}

delay();