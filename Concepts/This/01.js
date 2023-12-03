// const obj = {
//     prefix: 'BFE',
//     list: ['1', '2', '3'],
//     log() {
//         let newPrefix = this.prefix
//       this.list.forEach(function (item) {
//         console.log(newPrefix + item);
//       });
//     },
//   };
  
//   obj.log();


const obj = {
    prefix: 'BFE',
    list: ['1', '2', '3'],
    log() {
      this.list.forEach(function(item) {
        console.log(this.prefix + item);
      })
    },
  };
  
  obj.log();



 // const obj = {
//     prefix: 'BFE',
//     list: ['1', '2', '3'],
//     log() {
//       this.list.forEach(function(item) {
//         console.log(this.prefix + item);
//       }.bind(this)); // Explicitly binding the function to the `obj` object
//     },
//   };
  
//   obj.log();