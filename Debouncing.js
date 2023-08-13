var counter = 0;
const getData = () => {
    //api calls
    console.log("fetching the data...", counter++)
}

const debouncing = function(fn, d) {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() =>{
            getData.apply(context, args);
        }, d);
}
}

debouncing(getData, 300);