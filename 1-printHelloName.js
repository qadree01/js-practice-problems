/*
    Create a string to say hello in the format: "Hello, {{ name }}!"
    Ex. printHelloName("Aaron"), returns "Hello, Aaron!"
*/

function printHelloName(name) {
  return `Hello, ${name}!`
}

// Don't Edit
const printHelloNameTests = [
    {args: ["Aaron"], expected: "Hello, Aaron!"},
    {args: [""], expected: "Hello, !"}
]