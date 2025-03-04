// function declaration
// hoisting

{
  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

// function expression

{
  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));

  // console.log(this);
  // button.onclick = function (event) {
  //   console.log(event.target, this);
  // };

  // console.log(this);
  // button.addEventListener("click", function (event) {
  //   console.log(event.target, this);
  // });
}

// arrow functions
// context preservation / auto-binding

{
  const sum = (a, b) => {
    return a + b;
  };

  console.log(sum(2, 3));

  // console.log(this);
  // button.onclick = (event) => {
  //   console.log(event.target, this);
  // };

  // console.log(this);
  // button.addEventListener("click", (event) => {
  //   console.log(event.target, this);
  // });
}

{
  // sum: (a, b) -> a + b
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));

  // console.log(this);
  // button.onclick = (event) => console.log(event.target, this);

  // console.log(this);
  // button.addEventListener("click", (event) => console.log(event.target, this));
}

console.log("1" == 1);
console.log("1" === 1);
console.log(null == null);
console.log(null == undefined);
console.log(undefined == undefined);
