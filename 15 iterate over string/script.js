/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// Write code here
for (let l of str) {
  if (l=="a"||l=="e"||l=="i"||l=="o"||l=="u") {
    vowelsCount ++ ;
  }
}
console.log(vowelsCount);
// 8
