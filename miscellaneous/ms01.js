function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1(), foo2());

// both gives different output //

// the fact that semicolons are optional in js //
// so for the foo2 after the return js doesn't find any thing so it insert a ";" hence//
// below code is unused or unreachable, since the function retured! //

// but in foo1 it encouters {} so it works as aspected //