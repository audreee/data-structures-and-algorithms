/*
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:

Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

Example 2:

Input: [2, 4, 1, 2]
Output: 3

Example 3:

Input: [2, 3, 2, 1]
Output: 4
Constraints:

n == nums.length
1 <= n <= 10^4
1 <= nums[i] <= n

Approach:
This algorithm works because we "skip" over the duplicate numbers during the cycle sorting. Since we check that the current number is not equal to the number at the correct index,
if the current number is a duplicate, we will skip over it and move on to the next number (since the correct number is already at the correct index).
Then, when we iterate through the array again after sorting, the current numbers that are not equal to their index are the missing numbers (they are filled by duplicates).

Time Complexity:
The time complexity of the above algorithm is O(n).

Space Complexity:
The algorithm runs in constant space O(1).
*/

class Solution {
  findNumbers(nums) {
    let missingNumbers = [];
    let i = 0;
    while (i < nums.length) {
      // Since we start from range 1, the correct index should be the number minus
      let correctIndex = nums[i] - 1;
      // Check if number in correct position
      if (nums[i] !== nums[correctIndex]) {
        // Swap numbers
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        i++;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      // If number is not equal to index, it is a missing number
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
      }
    }

    return missingNumbers;
  }
}

const sol = new Solution();
console.log(sol.findNumbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(sol.findNumbers([2, 4, 1, 2]));
console.log(sol.findNumbers([2, 3, 2, 1]));