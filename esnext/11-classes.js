class Person {
  #name = "";

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  #goToTheToilet() {}
}

const person = new Person("Matteo Antony");
console.log(person.name);
person.name = "Luca Jonathan";
console.log(person.name);
console.log(person.#name);
