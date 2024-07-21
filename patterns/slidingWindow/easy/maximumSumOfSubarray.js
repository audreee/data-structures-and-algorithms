/*
Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

Example 1:

Input: arr = [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:

Input: arr = [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

Approach:
1. Initialize maxSum to -Infinity, start to 0, and windowSum to 0
2. Loop through the array
3. Increment windowSum by the current element
4. Check if the end index is greater than or equal to k - 1 (to meet the window size requirement)
5. Update maxSum to the greater number of maxSum and windowSum
6. Decrement windowSum by the element at the start index
7. Increment start index

Time Complexity:
The time complexity of our algorithm will be O(N) where ‘N’ is the number of elements in the input array.

Space Complexity:
The algorithm runs in constant space O(1).
*/

class Solution {
  findMaxSumSubArray (k, arr) {
    let maxSum = -Infinity;
    let start = 0
    let windowSum = 0;
    for (let end = 0; end < arr.length; end++) {
        windowSum += arr[end];
      if (end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum)
        windowSum -= arr[start];
        start++;
      }
    }
    return maxSum;
  };
}

let sol = new Solution();
console.log(sol.findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9