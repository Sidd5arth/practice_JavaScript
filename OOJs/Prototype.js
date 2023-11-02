'use strict'

const Person = function (firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName
}

const JoyBoy = new Person("Joy", "Boy");

console.log(JoyBoy);
//the new object is linked to the constructor function prototype prperty
console.log(JoyBoy.__proto__);
// __proto__ points to an object's prototype

// if a property of a method is not found in the object then js looks for it
// in the object's prototype.
// this how prototypal inheritence works.

const newBoy = "newBoy";



//setting a method on prototype
Person.prototype.calcAge = function (birthyear) {
    console.log(2023 - birthyear);
}
JoyBoy.calcAge(1356);

//setting a property on prototype
Person.prototype.species = 'God';
console.log(JoyBoy.species);
// this species have accecess only because of prototype see yourself
console.log(JoyBoy.hasOwnProperty('firstName')); //true
console.log(JoyBoy.hasOwnProperty('species')); //false




// prototype chain

// if a property or method is not found in the object's prototype
// js will look it into the constructor of that object and its prototype
// and chain goes on till we reach Global Object where it is null.
console.log(JoyBoy.__proto__); // refers to prototype of JoyBoy Object
console.log(JoyBoy.__proto__.__proto__); // refers to prototype of Person Object
console.log(JoyBoy.__proto__.__proto__.__proto__); // referse to prototype of global Object
// you can see more in the console of a browser

//Example 
//Now you know prototype
// try this in browser console
const arr = [1, 3, 4, 5, 6];
console.log(arr.__proto__);
// you will find indeed array in js are objects
// these are not actual array as some of the other languages has.
// there you can find the method and properties like map, filter, find etc

// you can see all the methods avilaible on array in Js.
// even you can introduce you own method 

Array.prototype.getSum = function () {
    let sum = 0;
    for(let i = 0; i < this.length; i++){
        sum += this[i];
    }
    return sum;
}
const result = arr.getSum();
console.log(result);

module.exports = Array.prototype.getSum;



// example

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
//     console.log(this);
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(this.speed);
// }
// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const BMW = new Car("BMW", 120);
// const Mercedes = new Car("Mercedes", 95)

// BMW.accelerate();
// BMW.brake();
// Mercedes.accelerate();
// Mercedes.brake();