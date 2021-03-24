/*
    Given an array of numbers, add together the positive nums & return the sum
    If no numbers are positive, return 0
    Ex. sumOfPositive([1, -2, 3, 4]), returns 8
*/

function sumOfPositive(nums) {
  let positiveNums = nums.filter(num => num > 0)
  if (positiveNums.length > 0) {
    return positiveNums.reduce((sum, num) => total = sum + num)
  } else {
    return positiveNums.length 
  }
}

const sumOfPositiveTests = [
    {args: [[1, -2, 3, 4]], expected: 8},
    {args: [[-2, -5, -10, -1]], expected: 0},
    {args: [[4, 40, -40, -4]], expected: 44}
]