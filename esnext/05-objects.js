const person = { firstName: "Matteo Antony", "last-name": "Mistretta" };

// R - RETRIEVAL/READ

// square bracket notation
console.log(person["firstName"]);
// dot notation
console.log(person.firstName);

console.log(person["last-name"]);

const property = "firstName";
console.log(person[property]);

// C - CREATION

person.age = 42;
console.log(person);

// U - UPDATE
person.age = 43;
console.log(person);

// D - DELETE

person.age = undefined;
console.log(person);

delete person.age;
console.log(person);

// destructuring

{
  const { firstName, "last-name": lastName } = person;
  console.log(firstName, lastName);
}

// spread operator (rest)

{
  const { firstName, ...rest } = person;
  console.log(firstName, rest);
}

{
  const newPerson = { ...person, age: 42 };
  console.log(newPerson, person);
}

{
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4, b: 5 };
  const merged = { ...obj1, ...obj2 };
  console.log(merged);
}

// rest parameters

function sum(...operands) {
  let total = 0;
  for (let i = 0; i < operands.length; i++) {
    total += operands[i];
  }
  return total;
}

console.log(sum(2, 3, 4));
