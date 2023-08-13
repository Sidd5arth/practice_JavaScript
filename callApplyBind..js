let name = {
    firstName: "hi",
    lastName: "there",
}

let printFullName = function(expression) {
    console.log(this.firstName + " " + this.lastName + " " + "-"+ " " + expression);
}

// printFullName.call(name, "calmly");

let name2 = {
    firstName: "yo",
    lastName: "what's up"
}

printFullName.call(name2, "cheerfully");
printFullName.apply(name2, ["cheerfully"]);

const newfun = printFullName.bind(name, "cheerfully");
console.log(newfun());

// (
//     <div onclick={debouncing(getData, 400)}>
//         <button>click me</button>
//     </div>
// )


