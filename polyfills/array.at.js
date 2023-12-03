
    Array.prototype.att = function (index) {
      if (typeof index === 'number' && Number.isInteger(index) && index >= 0) {
        return this[index];
      } else {
        return this[this.length+index]
      }
    };

  
  // Example usage:
  const myArray = [10, 20, 30, 40, 50];
  console.log(myArray.att(-1)); // Output: 50
  