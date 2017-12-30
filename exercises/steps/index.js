// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stairs = "") {
  if(n === row) {
    return
  };
  
  if(n === stairs.length) {
    console.log(stairs);
    return steps(n, row + 1)
  }
  
  if(stairs.length <= row) {
    stairs += "#";
  } else {
    stairs += " ";
  }
  steps(n, row, stairs);
}

module.exports = steps;

// function steps(n) {
//   let space = " ";
//   let hash = "#";
//
//   for(let i = 1; i <= n; i++) {
//     console.log(hash.repeat(i) + space.repeat(n - i))
//   }
// }

// function steps(n) {
//   for(row = 0; row < n; row++) {
//     let stairs = "";
//
//     for(column = 0; column < n; column++) {
//       if(column <= row) {
//         stairs += "#";
//       } else {
//         stairs += " ";
//       }
//     }
//     console.log(stairs);
//   }
// }