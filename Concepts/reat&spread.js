// explain rest and spread operator in js

// suppose we have an object

const info = {
    name:"JoyBoy",
    age:"800",
    address: "Grand line"
}

// if we want to change only the name we can use spread operator

const updatedInfo = {
    ...info,
    address:"east blue"
}
console.log(updatedInfo)



// rest operater here can be use to saperate out the object elements exapmle

const {name, ...rest} = info;
console.log(name);
console.log(rest);