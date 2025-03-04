const singleQuotes = 'Hello "world", how are you?';
const doubleQuotes = "Hello 'world', how are you?";

const expr = "variables".toUpperCase();
const templateLiteral = `I can use 'single' and "double" quotes
They are multiline too!
We can even interpolate ${expr}!!!`;
console.log(templateLiteral);

const html = `
<p class="paragraph">
  hello world!
</p>`;
console.log(html);

const userId = 1;
const url = "/api/users/" + userId + "/profile";
const betterUrl = `/api/users/${userId}/profile`;
console.log(url, betterUrl);

const firstCharacter = url[0];
const lastCharacter = url[url.length - 1];
console.log(firstCharacter, lastCharacter);

url[2] = "x";
console.log(url);
