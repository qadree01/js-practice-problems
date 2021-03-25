/*
    Given a string, determine whether it is a palindrome
    (same forwards and backwards, case-sensitive)
    Ex: isPalindrome("racecar") returns true
    Ex: isPalindrome("abcd") returns false
*/

function isPalindrome(str) {
  return str === str.split('').reverse().join('')
}

const isPalindromeTests = [
    {args: ["racecar"], expected: true},
    {args: ["abcd"], expected: false},
    {args: ["Abcba"], expected: false}
]