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



function debounce(callback, delay = 1000) {
    var time;
  
    return (...args) => {
      clearTimeout(time);
      time = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }


  function debounce(cb, d) {
    let timer;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args);
        }, d)
    }
  }

  function debounce(callback, delay = 1000) {
    let shouldWait = false;

    return (...args) => {
      if(shouldWait) return;
      callback(...args);
      shouldWait = true;
      clearTimeout(time);
      time = setTimeout(() => {
        shouldWait = false
      }, delay);
    };
  }