/*
    Given 2 numbers, multiply them WITHOUT THE * OPERATOR!
    ex multiplyNumbers(2, 5) returns 10
*/

function multiplyNumbers(num1, num2) {
  let sum = 0
  for (let i = 0; i < num1; i++) {
    sum += num2
  }
  return sum
}

const multiplyNumbersTests = [
    {args: [1, 0], expected: 0},
    {args: [5, 5], expected: 25},
    {args: [100, 500], expected: 50000}
]