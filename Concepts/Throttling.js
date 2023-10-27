var counter = 0;
const getData = () => {
    //api calls
    console.log("fetching the data...", counter++)
}

const debouncing = function(fn, d) {
    let flag = true;
    if(flag){
        let timer;
            clearTimeout(timer);
            getData();
            flag = false;
            timer = setTimeout(() =>{
                flag = true
            }, d);
    }
}

debouncing(getData, 200);