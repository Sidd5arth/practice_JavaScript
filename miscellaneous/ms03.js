// What is the output?

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

// fun call => prints 1
// fun call => prints 4
// setTimeout() puts execution of its referenced function into the event queue of the event loop of the browser and logged after 1000s when excuted
// similarly for 3 but logged after 0 sec
//https://www.jsv9000.app/  -> visualize the actual code

//0k! then what about 3 printing before 2, in the queue     
// setTimeout(function(){console.log(2)}, 1000);  entered first
// setTimeout(function(){console.log(3)}, 0);  enterd second Right?

// here queue usually prioritise tasks in the queue 

// HERE is what you must know about the JavaScript event loop queue

// The JavaScript event loop queue is not strictly a traditional first-in-first-out (FIFO) queue. 
// While tasks are generally processed in the order they were added, there can be priority considerations 
// due to the nature of the tasks and the event loop's design. 
// This behavior can lead to certain tasks being prioritized over others, even if they were added to the queue later.

// Microtasks and Macrotasks: The event loop has two main categories of tasks: microtasks and macrotasks. 
// Microtasks are generally higher-priority tasks that include promises and certain other asynchronous tasks. 
// Macrotasks are the traditional asynchronous tasks, such as setTimeout, setInterval, and user interactions. 
// Microtasks are processed before macrotasks.

// Promises: Promises, as part of the microtask queue, introduce an additional layer of prioritization. 
// Promises are generally processed right after the current task completes, before the next macrotask is picked up. 
// This behavior helps in ensuring a higher level of consistency and responsiveness in asynchronous operations.

// So, while the event loop's queue has some priority aspects due to microtasks and macrotasks, it's not a full-blown priority queue like in some other contexts. 
// It's designed this way to ensure that certain types of tasks (like microtasks and Promises) are given priority 
// to maintain the responsiveness and predictability of asynchronous code execution.
