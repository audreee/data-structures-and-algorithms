/* Problem Statement
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
[-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

Constraints:

n == att.length
0 <= n <= 3500
-100 <= arr[i] <= 100
-100 <= target <= 100

Time Complexity:
O(n^2) where n is the number of elements in the input array arr. Sorting the array will take O(nlogn) time. 
The searchPairs() function will take O(n) time. 
The searchTriplets() function will take O(n) time. The overall time complexity is O(nlogn + n + n) => O(n^2).

Space Complexity:
O(1) as no extra space is used.
*/

class Solution {
  searchTriplets(arr, target) {
    let count = 0;

    // Sort in ascending order
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
      // Calculate target sum of pairs
      let sum = target - arr[i]

      // Find the pairs, adding to the total count
      count += this.searchPairs(arr, i, sum)
    }

    return count;
  }

  searchPairs(arr, i, sum) {
    let count = 0;

    // Set left and right pointers
    let left = i + 1, right = arr.length - 1;

    while (left < right) {
      // Find the current sum
      let currentSum = arr[left] + arr[right];
      if (currentSum < sum) {
        // Since the right is max num and the left is min, all numbers between will be pairs
        count += (right - left);
        // Increment the left pointer
        left++;
      } else {
        right--;
      }
    }

    return count;
  }
}

let sol = new Solution();
console.log(sol.searchTriplets([-1, 0, 2, 3], 3)); // 2