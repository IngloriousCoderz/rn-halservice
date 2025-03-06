const numbers = [1, 2, 3, 4, 5];
const person = { firstName: "Matteo Antony", lastName: "Mistretta", age: 42 };

const square = (num) => num ** 2;
const isEven = (num) => !(num % 2);
const sum = (num1, num2) => num1 + num2;

{
  // index-based, old style
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    console.log(i, item);
  }

  // for-in on objects, old style
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      const value = person[key];
      console.log(key, value);
    }
  }

  // for-in on arrays, WRONG
  for (const index in numbers) {
    const value = numbers[index];
    console.log(index, value);
  }

  // for-of, only on arrays
  for (const item of numbers) {
    const index = numbers.indexOf(item);
    console.log(index, item);
  }
}

const keys = Object.keys(person);
for (const key of keys) {
  const value = person[key];
  console.log(key, value);
}

const values = Object.values(person);
for (const value of values) {
  console.log(value);
}

const entries = Object.entries(person);
for (const [key, value] of entries) {
  console.log(key, value);
}

// ARRAY METHODS

// print all items

{
  numbers.forEach((item, index, arr) => {
    console.log(item, index, arr);
  });

  // idiom: short-circuit
  numbers.forEach(console.log);
}

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares, numbers);
}

{
  const squares = numbers.map((item) => square(item));

  console.log(squares, numbers);
}

{
  const squares = numbers.map(square);

  console.log(squares, numbers);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens, numbers);
}

{
  const evens = numbers.filter((item) => isEven(item));
  console.log(evens, numbers);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens, numbers);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven = null;
  numbers.forEach((item) => {
    if (firstEven == null && isEven(item)) {
      firstEven = item;
    }
  });
  console.log(firstEven);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

// firstEvenIndex: [1, 2, 3, 4, 5] -> 1

{
  const firstEvenIndex = numbers.findIndex(isEven);
  console.log(firstEvenIndex);
}

// hasEven: [1, 2, 3, 4, 5] -> true

{
  let hasEven = false;
  numbers.forEach((item) => {
    if (!hasEven && isEven(item)) {
      hasEven = true;
    }
  });
  console.log(hasEven);
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// allEvens: [1, 2, 3, 4, 5] -> false

{
  let allEvens = true;
  numbers.forEach((item) => {
    if (allEvens && !isEven(item)) {
      allEvens = false;
    }
  });
  console.log(allEvens);
}

{
  const allEvens = numbers.every(isEven);
  console.log(allEvens);
}

// summation: [1, 2, 3, 4, 5] -> 15

{
  let summation = 0; // init
  numbers.forEach((item) => {
    summation = sum(summation, item); // update
  });
  console.log(summation); // result
}

{
  const summation = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(summation);
}

{
  const summation = numbers.reduce(sum, 0);
  console.log(summation);
}

{
  const [firstItem, ...rest] = numbers;
  let summation = firstItem; // init
  rest.forEach((item) => {
    summation = sum(summation, item); // update
  });
  console.log(summation); // result
}

{
  const summation = numbers.reduce(sum);
  console.log(summation);
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let sumOfSquareEvens = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      sumOfSquareEvens = sum(sumOfSquareEvens, square(item));
    }
  });
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers //
    .filter(isEven)
    .map(square)
    .reduce(sum);
  console.log(sumOfSquareEvens);
}

// sumOfEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  let sumOfSquareEvens = 0;
  numbers.forEach((item) => {
    const squared = square(item);
    if (isEven(squared)) {
      sumOfSquareEvens = sum(sumOfSquareEvens, squared);
    }
  });
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers //
    .map(square)
    .filter(isEven)
    .reduce(sum);
  console.log(sumOfSquareEvens);
}
