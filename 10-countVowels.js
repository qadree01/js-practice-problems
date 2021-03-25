/*
    Given a string, count the vowels and return that count
    Ex: countVowels("adsbecdei") -> a, e, e, i -> 4
    Ex: unbalancedArray("ffjnkjnj") -> no vowels -> 0
*/

function countVowels(s) {
  vowels = 0
  
  for (let vowel of s) {
    if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
      vowels++ 
    }
  }
  return vowels
}

const countVowelsTests = [
    {args: ['adsbecdei'], expected: 4},
    {args: ['ffjnkjnj'], expected: 0},
]