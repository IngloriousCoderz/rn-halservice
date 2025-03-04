// hoisting
// var a;

console.log("Hello world!");

// var a = 1;

let b = 2;
const c = 3;
// c = 4;

// block scoping
{
  var a = 1;
  let b = 2;
}

function func() {
  a = 1; // eslint-disable-line no-magic-numbers
  var a = 1;
  let b = 2;
}

// global namespace pollution
let num = 1;
console.log(typeof num);
let obj = {};
console.log(typeof obj);
let arr = [];
console.log(typeof arr, Array.isArray(arr));
let nil = null;
console.log(typeof nil, nil == null);
let undef = undefined;
console.log(typeof undef);
let notANumber = NaN;
console.log(typeof notANumber, Number.isNaN(notANumber));
let infinity = Infinity;
console.log(typeof infinity, Number.isFinite(infinity));

const COUNTDOWN = 10;

for (let i = 0; i < COUNTDOWN; i++) {
  console.log(i);
}
