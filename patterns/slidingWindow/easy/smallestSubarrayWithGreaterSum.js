/*
Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

Example 1:

Input: arr = [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Example 2:

Input: arr = [2, 1, 5, 2, 8], S=7
Output: 1 
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:

Input: arr = [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
Constraints:

1 <= S <= 
1 <= arr.length <= 10^5
1 <= arr[i] <= 10^4

Approach:
- Initialize windowSum to 0, minLength to a very large value, and windowStart to 0.
- Iterate through the array with a variable windowEnd from 0 to the end of the array.
- For each element at windowEnd, add it to windowSum.
- While windowSum is greater than or equal to S, do the following:
- Update minLength to be the smaller value between minLength and the current window size (windowEnd - windowStart + 1).
- Subtract the element at windowStart from windowSum.
- Move windowStart one position to the right.
- After the loop ends, check if minLength was updated. If it was, return minLength; otherwise, return 0.

Time Complexity:
The time complexity of our algorithm will be O(N) where ‘N’ is the number of elements in the input array.

Space Complexity:
The algorithm runs in constant space O(1).
*/

class Solution {
  findMinSubArray(s, arr) {
    let minLength = Infinity
    let start = 0, end = 0, windowSum = 0;

    for (end = 0; end < arr.length; end++) {
      windowSum += arr[end];

      while (windowSum >= s) {
        minLength = Math.min(minLength, (end - start + 1));
        windowSum -= arr[start];
        start++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  };
}

let sol = new Solution();
console.log(sol.findMinSubArray(7, [2, 1, 5, 2, 3, 2])); // 2