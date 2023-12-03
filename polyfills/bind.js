Function.prototype.myBind = function(context = {}, ...args) {
    if(typeof this !== "function"){
        throw new Error("not callable");
    }

    console.log(context);
    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}


const nameObj = {
    firstName: "joy",
    lastName: "Boy",
}

function getFullName(expression) {
    console.log(this.firstName + " " + this.lastName + " " + "-" + " " + expression)
}

let newFun = getFullName.myBind(nameObj, "Cheerfully");
console.log(newFun());