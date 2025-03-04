const numbers = [1, 2, 3, 4, 5];
const person = { firstName: "Matteo Antony", lastName: "Mistretta", age: 42 };

const square = (num) => num ** 2;

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

// print all items

{
  numbers.forEach((item, index, arr) => {
    console.log(item, index, arr);
  });

  numbers.forEach(console.log);
}

// square all items

{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares, numbers);
}

{
  const squares = numbers.map(square);

  console.log(squares);
}
