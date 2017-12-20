// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanStrA = mapObj(stringA);
  const cleanStrB = mapObj(stringB);
  
  if(Object.keys(cleanStrA).length !== Object.keys(cleanStrB).length) {
    return false;
  }
  
  for(char in cleanStrA) {
    if(cleanStrA[char] !== cleanStrB[char]) {
      return false;
    }
  }
  
  return true;
}

function mapObj(str) {
  const cleanMap = {};
  
  for(char of str.replace(/[^\w]/g, "").toLowerCase()) {
    cleanMap[char] = cleanMap[char] +1 || 1;
  }
  
  return cleanMap;
};

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let str1Map = {};
//   let str2Map = {};
//
//   const strA = stringA.replace(/[^\w]/gi, "").toLowerCase();
//   const strB = stringB.replace(/[^\w]/gi, "").toLowerCase();
//
//   for(string of strA) {
//     str1Map[string] = str1Map[string] +1 || 1;
//   }
//
//   for(string of strB) {
//     str2Map[string] = str2Map[string] +1 || 1;
//   }
//
//   if(strA.length === strB.length) {
//     return JSON.stringify(str1Map).split('').sort().join() === JSON.stringify(str2Map).split('').sort().join();
//   }
//
//   return false;
// }