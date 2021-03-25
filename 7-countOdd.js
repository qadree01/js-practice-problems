/*
    Given a number, count how many odd numbers are below that number
    Ex: countOdd(5) -> 1, 3 -> returns 2 
    Ex: countOdd(10) -> 1, 3, 5, 7, 9 -> returns 5
*/

function countOdd(n) {
  let oddNum = []
  let oddNums = 0

  while (n > 0) {
    n -= 1
    oddNum += n
  }
  
  for (let i = 0; i < oddNum.length; i++) {
    if (i % 2 === 1) {
      oddNums += 1
    }
  }
  return oddNums
}

const countOddTests = [
    {args: [5], expected: 2},
    {args: [10], expected: 5},
    {args: [1], expected: 0}
]