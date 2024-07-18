/*
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to the number 1. All other (not-happy) numbers will never reach 1. Instead, they will be stuck in a cycle of numbers that does not include 1.

Given a positive number n, return true if it is a happy number otherwise return false.
*/

class Solution {
  find(num) {
    let slow = num;
    let fast = num;

    while (true) {
      slow = this.getSquareSum(slow);
      fast = this.getSquareSum(this.getSquareSum(fast));

      if (slow === fast) {
        break;
      }
    }
    
    return slow === 1;
  }

  getSquareSum(num) {
    return num.toString()
    .split('')
    .reduce((sum, digit) => sum + (Number(digit) ** 2), 0);
  }
}
