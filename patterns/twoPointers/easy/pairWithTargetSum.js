// Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].

// Example 1:

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// Example 2:

// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

// Constraints:

// 2 <= arr.length <= 104
// -109 <= arr[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// The dominant factor in this algorithm is the while loop, making the overall time complexity O(N) where N is the number of elements in the input array. 
// The space complexity is O(1) because we are only using a constant number of variables.

class Solution {
  search(arr, targetSum) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] === targetSum) {
        return [left, right];
      } else if (arr[left] + arr[right] > targetSum) {
        right--;
      } else if (arr[left] + arr[right] < targetSum) {
        left++
      }
    }
    return [-1, -1];
  }
}

let solution = new Solution();
console.log(solution.search([1, 2, 3, 4, 6], 6)); // [1, 3]