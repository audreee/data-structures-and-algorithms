/*
We are given an unsorted array containing n numbers taken from the range 1 to n. The array has some numbers appearing twice, find all these duplicate numbers using constant space.

Example 1:

Input: [3, 4, 4, 5, 5]
Output: [4, 5]

Example 2:

Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5]

Constraints:

nums.length == n
1 <= n <= 10^5
1 <= nums[i] <= n
Each element in nums appears once or twice.

Time Complexity:
O(N)

Space Complexity:
O(1), ignoring the space required for the duplicates array.

Approach:
This problem is really similar to ./findTheDuplicateNumber.js, with a key difference. Since the other problem only has 1 duplicate number, 
it's acceptable to just return early as soon as we spot the duplicate. However, in this problem, we can have multiple duplicate numbers, 
so it's important that we complete sorting the array before checking for duplicates in order to make sure we catch all the duplicate numbers. 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
  let i = 0; 
  while (i < nums.length) {
      let j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
          i++;
      }
  } 

  let duplicateNums = [];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
          duplicateNums.push(nums[i]);
      }
  }

  return duplicateNums;
}