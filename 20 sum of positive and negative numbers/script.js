/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
function isPositive(value) {
  if (value > 0)
      return value;
}
function isNagaitive(value) {
  if (value <= 0)
      return value;
}
const sumPlusMinus = (nums) => {
  let positiveSum = 0;
  let positive = nums.filter(isPositive);
  for (let p of positive) {
    positiveSum += p;
  }
  let nagaitiveSum = 0;
  let nagaitive = nums.filter(isNagaitive);
  for (let n of nagaitive) {
    nagaitiveSum += n;
  }
  return `{plus: ${positiveSum}, minus: ${nagaitiveSum}}`;
}
console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
