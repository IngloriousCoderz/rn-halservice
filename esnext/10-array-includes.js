const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(2));

const httpStatus = 200;

if (httpStatus === 200 || httpStatus === 201 || httpStatus === 204) {
  console.log("Ok!");
} else if (httpStatus === 301) {
  console.log("Modified/redirected");
}

switch (httpStatus) {
  case 200:
  case 201:
  case 204:
    console.log("Ok!");

  case 301:
    console.log("Modified/redirected");
}

const SUCCESS_CODES = [200, 201, 204];
const MODIFIED_CODES = [301, 302, 304];

if (SUCCESS_CODES.includes(httpStatus)) {
  console.log("Ok!");
} else if (MODIFIED_CODES.includes(httpStatus)) {
  console.log("Modified/redirected");
}

// condition ? statementIfTrue : statementIfFalse

const action = happyAndYouKnowIt ? "clap your hands" : "cry";

// In Python:
// action = "clap your hands" if happyAndYouKnowIt else "cry"
