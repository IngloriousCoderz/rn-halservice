function sum(a, b) {
  return a + b;
}

sum(2, 3);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const sumTwo = sum(2);
sumTwo(3);

sum(2)(3);

const sum = (a, b) => a + b;
const sum = (a) => (b) => a + b;

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => sum(number, 2));
const newNumbers = numbers.map((number) => sumTwo(number));
const newNumbers = numbers.map(sumTwo);
