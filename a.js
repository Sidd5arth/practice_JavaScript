// const entries = [1,2,3,4].entries()
// for (const item of entries) {
//   console.log(item)
//   break
// }
// for (const items of entries) {
//   console.log(items)
//   break;
// }


/////////////////////////////////////

// function func() {
//     try {
//       console.log(1)
//       return 
//     } catch (e) {
//       console.log(2)
//     } finally {
//       console.log(3)
//     }
//     console.log(4)
//   }
  
//   func()

//////////////////////////////////////

// const error = new Error('😢')
// error.name = 'SyntaxError'
// console.log(error instanceof Error)
// console.log(error instanceof SyntaxError)

// const clonededError = structuredClone(error)
// console.log(clonededError instanceof Error)
// console.log(clonededError instanceof SyntaxError)

/////////////////////////////////////////

// class A {
//     static dev = 'BFE'
//     dev = 'bigfrontend'
//   }
  
//   class B extends A {
//     log() {
//       console.log(this.dev)
//     }
  
//     static log() {
//       console.log(this.dev)
//     }
//   }
  
//   B.log()
//   new B().log()
//   The static keyword defines a static method or field for a class that cannot be directly accessed on 
//   instances of the class but they're accessed on the class itself. Here, class A defines two properties 
//   called static dev and dev both of which are inherited by sublass B, When we invoke B.log the static 
//   method gets invoked which references the static dev i.e. BFE while using new B().log() first creates
//   an instance of B and then invokes log which will reference the property dev inherited from A thus logging bigfrontend 

//////////////////////////////////////////////////////////////////


// function a() {
//     'use strict'
//     dev = 'BFE'
//     console.log(dev)
//   }
  
//   a()

///////////////////////////////////////////

// console.log(parseInt(' 1'))
// console.log(parseInt(' 00001'))
// console.log(parseInt(' 0100'))
// console.log(parseInt(' 1e2 '))


////////////////////////////////////////////
// function A() {
//     this.dev1 = 'BFE'
//     this.dev2 = 'dev'
//     return {
//       dev1: 'bigfrontend',
//     }
//   }
  
//   const a = new A()
//   console.log(a.dev1)
//   console.log(a.dev2)


//////////////////////////////////////

// const a = [1,2,3]
// const b = a.push(4);
// const c = b.push(5)
// console.log(c)

// this will work as aspected
// const a = [1,2,3] 
// const b = a.concat(4) 
// const c = b.concat(5) 

//////////////////////////////////////////


