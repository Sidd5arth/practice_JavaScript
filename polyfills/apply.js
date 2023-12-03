Function.prototype.myApply = function (context = {}, args = []) {
    if(typeof this !== "function"){
        throw new Error(this + "not callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("CreateListFromArrayLike Called on non-object")
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

let x = printFullName.myApply(nameObj, ["yo", "hi"]);
console.log(x);