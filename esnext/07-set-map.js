const numbers = [1, 2, 2, 3, 4, 3, 5];
const noDuplicates = [...new Set(numbers)]; // idiom
console.log(noDuplicates);

const person = new Map();
person.set("name", "Matteo Antony");
person.set(2, "legs");
