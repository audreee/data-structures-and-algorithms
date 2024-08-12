/*
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

Example 1:

Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.
Example 2:

Input: [3, 1, 2, 3, 6, 4]
Output: [3, 5]
Explanation: '3' is duplicated and '5' is missing.
Constraints:

2 <= nums.length <= 10^4
1 <= nums[i] <= 10^4

Time Complexity: O(N)
Space Complexity: O(1)
*/

class Solution {
  findNumbers(nums) {
    let i = 0;
    while (i < nums.length) {
      // Since nums start from range 1, the correct index should be the value of num - 1
      let j = nums[i] - 1;
      // Check if the num at the current index doesn't match the num at the correct index
      if (nums[i] !== nums[j]) {
        // Swap the nums
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        i++;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      // Check if the current num isn't at its correct index
      if (nums[i] !== i + 1) {
        // The current num is the duplicate, and it's located at the index of the missing num, so the value of the missing num is i + 1
        return [nums[i], i + 1]
      }
    }
    return [-1, -1];
  }
}
