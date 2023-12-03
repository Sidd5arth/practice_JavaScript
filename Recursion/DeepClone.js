// create a deep copy / deep clone of the given object where the cloned object is same but not equal to the given object.

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const clonedArray = [];
    for (let i = 0; i < obj.length; i++) {
      clonedArray.push(deepCopy(obj[i]));
    }
    return clonedArray;
  }

  if (typeof obj === "object") {
    const clonedObject = {};
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (obj.hasOwnProperty(key)) { // to ensure that it avoid inherited property from prototype inheritance
        clonedObject[key] = deepCopy(obj[key]);
      }
    }
    return clonedObject;
  }
}

const originalObject = {
  name: "John",                             //string
  age: 30,                                  //number
  hobbies: ["reading", "hiking"],           //array
  plots: [                                  //array of objects
    { name: "a", area: "b" },
    { name: "c", area: "d" },
  ],
  address: {                                 //object
    street: "123 Main St",
    city: {                                   //object with arra   
      hometown: ["Exampleville", "place2"],
      currentLocation: "somePlace",
    },
  },
};
const result = deepCopy(originalObject);
console.log(result.address.city)
console.log(result);
