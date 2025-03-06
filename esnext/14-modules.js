// CommonJS

const jquery = require("jquery");
const myModule = require("./modules/my-module");

const PI = 3.14;

function sum(a, b) {
  return a + b;
}

module.exports = { PI, sum, default: 42 };

// ES6 Modules

import jquery from "jquery";
import myModule from "./modules/my-module";

// named exports

export const PI = 3.14;

export function sum(a, b) {
  return a + b;
}

// default export

export default 42;

// index.js

import myNumber, { PI, sum as add } from "./14-modules";
import * as Module from "./14-modules";

console.log(myNumber); // 42
console.log(Module.PI);
console.log(add(2, 3));

import("./my-module").then((module) => {
  console.log(module.default);
  console.log(module.PI);
});
