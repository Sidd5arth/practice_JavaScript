// Execute 3 asynchronous functions one after the other in sequence using promise chaining

const getData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const res = 7;
            if(res){
                resolve(res);
            }else{
                reject("data retrival failed")
            }
        }, 1000)
})
}

const res = getData();

res.then((data) =>{
    console.log("data", data);
    return new Promise ((resolve, reject) => {
        const res = 6;
        if(res){
            resolve(res);
        }else{
            reject("Failed to retrive data");
        }
    })
}).then((data)=>{
    console.log("data", data);
    return new Promise ((resolve, reject) => {
        const res = 8;
        if(res){
            resolve(res);
        }else{
            reject("Failed to retrive data again");
        }
    })
}).catch((error) => {
    console.log("Error", error);
})
