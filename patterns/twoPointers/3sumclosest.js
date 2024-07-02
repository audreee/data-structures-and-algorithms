/* Problem Statement
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: The triplet [-1, 0, 3] has the sum '2' which is closest to the target.
There are two triplets with distance '1' from the target: [-1, 0, 3] & [-1, 2, 3]. Between these two triplets, the correct answer will be [-1, 0, 3] as it has a sum '2' which is less than the sum of the other triplet which is '4'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'

Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

Example 4:

Input: [0, 0, 1, 1, 2, 6], target=5
Output: 4
Explanation: There are two triplets with distance '1' from target: [1, 1, 2] & [0, 0, 6]. Between these two triplets, the correct answer will be [1, 1, 2] as it has a sum '4' which is less than the sum of the other triplet which is '6'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'

Constraints:

3 <= arr.length <= 500
-1000 <= arr[i] <= 1000
-10^4 <= target <= 1^04

The time complexity of the above algorithm will be O(N^2) where ‘N’ is the number of elements in the input array. 
This is due to the sorting step being O(N*logN), the two-pointer traversal being O(N), and iterating through the array being O(N).
O(N*logN + O(N) + O(N)) => O(N^2)

The space complexity of the above algorithm will be O(1) as no additional space is being used.
*/

class Solution {
  searchTriplet(arr, targetSum) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let closestSum = Infinity;

    // Loop over the numbers in the array
    for (let i = 0; i < arr.length - 2; i++) {
      // Set the two pointers
      let left = i + 1, right = arr.length - 1;

      while (left < right) {
        // Find the current sum of the current numbers
        let currentSum = arr[i] + arr[left] + arr[right]
        // If the distance between the current sum is less than the closest sum,
        // then set the new closest sum. If they have an equal distance, find the smaller of the sums.
        if (Math.abs(targetSum - currentSum) < Math.abs(targetSum - closestSum) || 
            Math.abs(targetSum - currentSum) === Math.abs(targetSum - closestSum) &&
            currentSum < closestSum) {
              closestSum = currentSum;
            }

        // If the sum is larger than the target, decrement the right pointer.
        if (currentSum > targetSum) {
          right--;
        // If the sum is smaller than the target, increment the left pointer.
        } else if (currentSum < targetSum) {
          left++;
        }
      }
    }

    return closestSum;
  }
}

let sol = new Solution();
console.log(sol.searchTriplet([-1, 0, 2, 3], 3)); // 2
