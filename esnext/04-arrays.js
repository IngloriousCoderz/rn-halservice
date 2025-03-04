const numbers = [1, 2, 3, 4, 5];

{
  const firstItem = numbers[0];
  const secondItem = numbers[1];
  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, secondItem, lastItem);

  numbers[2] = 7;
  console.log(numbers);

  const a = 2;
  // a = 3;
  // numbers = [7, 8, 9, 10]

  numbers.push(6);
  console.log(numbers);

  numbers.pop();
  console.log(numbers);

  numbers.shift();
  console.log(numbers);

  numbers.unshift(1);
  console.log(numbers);

  numbers.splice(2, 2, 3, 4);
  console.log(numbers);
}

// destructuring

{
  const [firstItem, secondItem, , fourthItem] = numbers;

  // const firstItem = numbers[0];
  // const secondItem = numbers[1];
  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, secondItem, fourthItem, lastItem);
}

// spread operator (rest)

{
  const [firstItem, secondItem, ...rest] = numbers;

  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, secondItem, rest, lastItem);

  const newNumbers = [secondItem, firstItem, ...rest];
  console.log(newNumbers);
}

{
  const newNumbers = [...numbers, 6];
  console.log(newNumbers, numbers);
}

{
  const newNumbers = numbers.slice(2, 4);
  console.log(newNumbers, numbers);
  console.log(numbers.slice(0, -1), numbers);
}

{
  const [firstItem, ...newNumbers] = numbers;
  console.log(newNumbers, numbers);
}

{
  const newNumbers = [0, ...numbers];
  console.log(newNumbers, numbers);
}

{
  const newNumbers = [...numbers.slice(0, 2), ...numbers.slice(3)];
  console.log(newNumbers, numbers);
}

{
  const newNumbers = [...numbers.slice(0, 2), 7, ...numbers.slice(3)];
  console.log(newNumbers, numbers);
}

{
  // this creates a hole!
  delete numbers[2];
  console.log(numbers);
}
