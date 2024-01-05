var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();

// inner function doesn't have access to this of the outer function
// In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

// In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function,
// whereas the reference to the local variable self remains in scope and is accessible there due to closure.
// Closures allow inner functions to retain access to the variables and parameters of their containing (enclosing) functions,
// which is why self.foo still works correctly within the inner function.

// example 01

var dev = "hi";

function a() {
  let dev = "hello";
  return function () {
    console.log(dev);
  };
}

dev = "hy";

a()();

/////////////////////////////////
