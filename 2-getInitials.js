/*
    Create a string to get initials from a first and last name
    Must be uppercase and separated with a period (".")
    Ex. getInitials("Aaron Jack"), returns "A.J"
*/

function getInitials(name) {
  const names = name.split(' ')
  return `${names[0][0]}.${names[1][0]}`
}

// Don't Edit
const getInitialsTests = [
    {args: ["Aaron Jack"], expected: "A.J"},
    {args: ["Jan Frey"], expected: "J.F"},
    {args: ["Harry Potter"], expected: "H.P"}
]