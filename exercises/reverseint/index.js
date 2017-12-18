// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversedNumbers = n.toString()
    .split('').reverse().join('');
  
  return parseInt(reversedNumbers) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   let reversedNumber;
//
//   if(Math.sign(n) === 1) {
//     reversedNumber = parseInt(n.toString()
//       .split('').reverse().join('').replace(/0/, ""));
//   } else if(Math.sign(n) === -1) {
//     reversedNumber = parseInt("-" + n.toString()
//       .split('').reverse().join('').replace(/0/, ""));
//   } else {
//     return 0;
//   }
//
//   return reversedNumber;
// }