// Print numbers from 1 to 10 with delay of 1 second between each value being printed "recursively"

function rec(n, i){
    if(i > n) return;
    setTimeout(()=> {
        console.log(i);
        rec(n, ++i);
    }, 1000);
}
const n = 10;
let i = 1;
rec(n, i)