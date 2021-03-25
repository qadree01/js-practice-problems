/*
    Given an array of positive and negative integers,
    find the number that does not have an opposite
    Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5
    Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12
*/

function unbalancedArray(nums) {
  return nums.reduce((sum, num) => total = sum + num) 
}

const unbalancedArrayTests = [
    {args: [[-1, 4, 1, 5, -4]], expected: 5},
    {args: [[12, 1, 21, -21, -1]], expected: 12},
]

