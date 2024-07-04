/* Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30                                              
Output: [2], [5], [2, 5], [3], [5, 3], [10]                           
Explanation: There are six contiguous subarrays whose product is less than the target.

Example 2:

Input: [8, 2, 6, 5], target=50                                              
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]                         
Explanation: There are seven contiguous subarrays whose product is less than the target.

Constraints:

1 <= arr.length <= 3 * 10^4
1 <= arr[i] <= 1000
0 <= k <= 10^6

Time Complexity:
The main for loop is O(N). However, creating subarrays in each iteration can take up to O(N^2), making the overall time complexity O(N^3).

Space Complexity:
So, at most, we need space for O(n^2) output lists. At worst, each subarray can take O(n) space, so overall, our algorithm’s space complexity will be O(n^3).
*/

class Solution {
  findSubarrays(arr, target) {
    let result = []
    let left = 0;
    let product = 1;
      
    for (let right = 0; right < arr.length; right++) {
      product *= arr[right];

      while (product >= target && left < arr.length) {
          product /= arr[left];
          left++;
      }
      
      let subarray = [];

      for (let i = right; i >= left; i--) {
        subarray.unshift(arr[i]);

        result.push([...subarray]);
      }
    }

    return result;
  }
}

const sol = new Solution();
// Example usage
console.log(sol.findSubarrays([2, 5, 3, 10], 30));
console.log(sol.findSubarrays([8, 2, 6, 5], 50));