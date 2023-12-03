const timeLimit = (fn, t) => {
    return async (...arg) => {
        return new Promise ( async(reject, resolve) => {
            let flag = false;
            const timer = setTimeout(() => {
                if(flag === false){
                    flag = true;
                    reject("Time limit Exceeded")
                }
            }, t)

            try{
                const result = await fn(...arg);
                if(flag === false){
                    flag = true;
                    clearTimeout(timer)
                    resolve(result);
                }
            } catch(error) {
                if(flag === true){
                    flag = true;
                    clearTimeout(timer);
                    reject(error);
                }
            }
        })
    }
}
const fn = async (n) => { await new Promise(res => setTimeout(res, 200)); return n * n; }

const timeLimitedFn = timeLimit(fn, 100);
timeLimitedFn(5)
  .then(result => console.log(result))
  .catch(error => console.log(error));



  