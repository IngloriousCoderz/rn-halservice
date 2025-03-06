const obj = {
  name: "Matteo Antony",
  legs: ["left", "right"],
  speak() {
    return "Hello world!";
  },
};

console.log(obj?.name);
console.log(obj?.legs?.[0]);
console.log(obj?.speak?.());
