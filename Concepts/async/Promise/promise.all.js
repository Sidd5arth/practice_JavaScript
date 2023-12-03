function promiseAll(array) {
    return new Promise((resolve, reject) => {
      const promiseCount = array.length;
      const result = new Array(promiseCount);
      if (promiseCount === 0) {
        resolve(result);
        return;
      }
  
      let resolvedPromisesCount = 0;
  
      array.forEach(async (item, index) => {
        try {
          const asyncResult = await item;
          result[index] = asyncResult;
          resolvedPromisesCount++;
  
          if (resolvedPromisesCount === promiseCount) {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }
  
  const p0 = Promise.resolve(2);
  const p1 = Promise.resolve(3);
  let promiseArray = [p0, p1];
  
  promiseAll(promiseArray)
    .then((results) => {
      console.log("All promises resolved:", results);
    })
    .catch((error) => {
      console.error("At least one promise was rejected:", error);
    });
  