/* 
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

Example 2:

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted

Example 4:

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.

Constraints:

1 <= arr.length <= 10^4
-105 <= arr[i] <= 10^5

Time Complexity:
The time complexity of the above algorithm is O(N) where ‘N’ is the total number of elements in the given array.

Space Complexity:
The algorithm runs in constant space O(1).
*/

class Solution {
  sort(arr) {
    let low = 0;
    let high = arr.length - 1;

    // Increment low to get the lowest number
    while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
      low++;
    }

    // If we reach the end, array is already sorted
    if (low === arr.length - 1) {
      return 0;
    }

    // Decrement high to get the highest number
    while (high > 0 && arr[high] >= arr[high - 1]) {
      high--;
    }

    let min = Infinity;
    let max = -Infinity;
    
    // Find the max and min numbers of the subarray
    for (let i = low; i <= high; i++) {
      min = Math.min(min, arr[i])
      max = Math.max(max, arr[i])
    }

    // Extend the array to the left to include numbers that need to be sorted
    while (low > 0 && arr[low - 1] > min) {
      low--;
    }

    // Extend the array to the right to include numbers that need to be sorted
    while (high < arr.length - 1 && arr[high + 1] < max) {
      high++;
    }

    return high - low + 1;
  }
}
