/* 
We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2

Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

Constraints:

n == nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All the numbers of nums are unique.

Time Complexity:
The time complexity of the above algorithm is O(n). In the while loop, although we are not incrementing the index i when swapping the numbers, 
this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers 
and once a number is at its correct index, we will move on to the next number by incrementing i. 
In the end, we iterate the input array again to find the first number missing from its index, so overall, our algorithm will take O(n) + O(n - 1) + O(n) which is asymptotically equivalent to O(n).

Space Complexity:
This algorithm runs constant space O(1).
*/

class Solution {
  findMissingNumber(nums) {
    let i = 0;
    const n = nums.length;
    while (i < n) {
      // Correct index should be the number itself, since we start from 0
      let correctIndex = nums[i]
      // Check if number in correct position
      if (nums[i] < n && nums[i] !== nums[correctIndex]) {
        // Swap numbers
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
      } else {
        i++;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
        return i
      }
    }

    return n;
  }
}
