/* Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.

Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109

Time Complexity:
- sorting is O(N * logN)
- outer loop is O(N)
- inner loop is O(N)
- two-pointer traversal is O(N)
- overall time complexity is O(N * logN + N^3) => O(N^3) as the dominant term

Space Complexity:
O(N), as required for sorting.
*/

class Solution {
  searchQuadruplets(arr, target) {
    const quadruplets = [];
    
    // sort in ascending order
    arr.sort((a, b) => a - b);

    for (let first = 0; first < arr.length - 3; first++) {
      // Skip duplicates in outer loop
      if (first > 0 && arr[first] === arr[first - 1]) {
        continue;
      }

      for (let second = first + 1; second < arr.length - 2; second++) {
        // Skip duplicates in inner loop
        if (second > first + 1 && arr[second] === arr[second - 1]) {
          continue;
        }

        // Find the pair of numbers that reach the target
        this.searchPairs(arr, target, first, second, quadruplets)
      }
    }

    return quadruplets;
  }

  searchPairs(arr, target, first, second, quadruplets) {
    // Initialize our two pointers
    let left = second + 1;
    let right = arr.length - 1;

    while (left < right) {
      let currentSum = arr[first] + arr[second] + arr[left] + arr[right];

      if (currentSum > target) {
        // Decrement the right pointer
        right--;

        // Skip duplicate numbers
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (currentSum < target) {
        // Increment the left pointer
        left++;

        // Skip duplicate numbers
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
      } else {
        // Push the array of quadruplets
        quadruplets.push([arr[first], arr[second], arr[left], arr[right]])
        left++;
        right--;

       // Skip duplicate numbers for left
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        // Skip duplicate numbers for right
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      }
    }
  }
}

let sol = new Solution();
console.log(sol.searchQuadruplets([4, 1, 2, -1, 1, -3], 1))
