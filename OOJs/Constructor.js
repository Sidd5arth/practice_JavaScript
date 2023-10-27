'use strict'
const getSum = require('./Prototype.js');

const Person = function (firstName, lastName ) {
    console.log(this); //instance properties
    this.firstName = firstName;
    this.lastName = lastName
    console.log(this);
    //function automatically returns the object unless we explicity return something
}

// an object has a constructor property which points to itself
// which can be access via this inside the object
console.log(Person.prototype.constructor);

new Person ('yoyo', 'oeoe');
const JoyBoy = new Person("Joy", "Boy");

console.log(JoyBoy);

const newBoy = "newBoy";

// checking
// console.log(JoyBoy instanceof Person);
// console.log(newBoy instanceof Person);

const arr = [7, 3, 2, 5, 5];
const result = arr.getSum();
console.log(result)

