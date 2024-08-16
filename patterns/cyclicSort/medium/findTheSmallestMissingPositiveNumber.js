/* Given an unsorted array containing numbers, find the smallest missing positive number in it.

Note: Positive numbers start from '1'.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'

Example 2:

Input: [3, -2, 0, 1, 2]
Output: 4

Example 3:

Input: [3, 2, 5, 1]
Output: 4

Example 4:

Input: [33, 37, 5]
Output: 1
Constraints:

1 <= nums.length <= 10^5
-231 <= nums[i] <= 231 - 1

Time Complexity:
O(N)

Space Complexity:
O(1)
*/

class Solution {
  findNumber(nums) {
    let i = 0;
    while (i < nums.length) {
      let j = nums[i] - 1;
      // We need to check for positive numbers and numbers within the range (nums.length)
      if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
        i++;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        return i + 1
      }
    }
    
    return nums.length + 1;
  }
}
