// function h() {
//     console.log(a, b, c);

//     const a = 1;
//     let b = 2;
//     var c = 3;
// }

// h();

function add(a) {
    return function(b) {
        if(b) return add(a+b);
        else return a;
    }
}
console.log(add(3)(4)(6)());