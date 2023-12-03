Function.prototype.myCall = function (context = {}, ...args) {
    if(typeof this !== "function"){
        throw new Error(this + "not callable");
    }

    context.fn = this;
    context.fn(...args);
}


let nameObj = {
    firstName: "hi",
    lastName: "there",
}

let printFullName = function(expression) {
    console.log(this.firstName + " " + this.lastName + " " + "-"+ " " + expression);
}

let x = printFullName.myCall(nameObj, "yo");
console.log(x);