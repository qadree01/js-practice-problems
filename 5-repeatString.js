/*
    Given a string, duplicate in n times and return a single string
    Ex: repeatString("B", 5) returns "BBBBB"
    Ex: repeatString("Abc", 3) returns "AbcAbcAbc"
*/

function repeatString(s, n) {
  newStr = ''
  for (let i = 0; i < n; i++) {
    newStr += s
  }
  return newStr
}

const repeatStringTests = [
    {args: ["Abc", 3], expected: "AbcAbcAbc"},
    {args: ["B", 5], expected: "BBBBB"},
    {args: ["hello", 2], expected: "hellohello"}
]