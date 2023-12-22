// One of the differences between null and undefined is how they are treated
// differently in JSON.stringify().

// JSON.stringify({a: null})      // '{"a":null}'
// JSON.stringify({a: undefined}) // '{}'

// JSON.stringify([null])         // '[null]'
// JSON.stringify([undefined])    // '[null]'

// This difference might create troubles if there are missing alignments between client and
// server. It might be helpful to enforce using only one of them.

// write an algorithm which returns a copy where all undefined are replaced with null

function undefinedToNull(arg) {
  if (typeof arg === "object" && arg !== null) {
    for (let key in arg) {
      if (arg.hasOwnProperty(key)) {
        arg[key] = undefinedToNull(arg[key]);
      }
      if (arg[key] === undefined) arg[key] === null;
    }
  } else if (Array.isArray(arg)) {
    for (let item of arg) {
      if (Array.isArray(item)) {
        undefinedToNull(item);
      }
      if (item === undefined) item = null;
    }
  } else if (arg === undefined) arg = null;

  return arg;
}

const case1 = { a: ["hello", undefined, "there"] };
const case2 = { a: undefined, b: "hello" };
console.log(undefinedToNull(case1));
console.log(undefinedToNull(case2));
