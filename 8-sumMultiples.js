/*
    Given a number, count how many numbers below it are multiples of 3 and 5
    Then, sum those multiples together
    Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23
*/

function sumMultiples(n) {
  let sum = 0
  while(n--) {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n
    }
  }
  return sum
}

const sumMultiplesTests = [
    {args: [10], expected: 23},
    {args: [200], expected: 9168},
    {args: [2000], expected: 931668},
]