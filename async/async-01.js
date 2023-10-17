// Create a function which receives a function as argument and executes it after 2 seconds

// the Argument function 

function args(){
    console.log("yo js");
}

function callBack(fun){
    if(typeof fun === 'function'){
        setTimeout(() => {
            fun();
            console.log("func executed after 2 sec")
        }, 2000);
    }
}

callBack(args);