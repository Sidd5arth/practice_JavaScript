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
const fn = async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; }
console.log(timeLimit(fn, 100))
  