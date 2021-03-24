/*
    Given 2 numbers, multiply them WITHOUT THE * OPERATOR!
    ex multiplyNumbers(2, 5) returns 10
*/

function multiplyNumbers(num1, num2) {
  multiplied = 0
  if (num1 === 0 || num2 === 0) {
    multiplied = 0
  } else if (num1 < num2) {
    while (num1 < num2) {
      multiplied += num1
    }
  } else if (num2 < num1) {
    while (num2 < num1) {
      multiplied += num2
    }
  } else if (num1 = num2) { 
    multiplied = sqrt(num1)
  }
  return multiplied
}

console.log(multiplyNumbers(5, 10))

const multiplyNumbersTests = [
    {args: [1, 0], expected: 0},
    {args: [5, 5], expected: 25},
    {args: [100, 500], expected: 50000}
]