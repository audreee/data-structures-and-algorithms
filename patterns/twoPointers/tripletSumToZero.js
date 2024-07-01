// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Example 1:
// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Explanation: There are four unique triplets whose sum is equal to zero. smallest sum.'

// Example 2:
// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

// Constraints:
// 3 <= arr.length <= 3000
// -105 <= arr[i] <= 105

// Time Complexity: 
// O(n^2) where n is the number of elements in the input array arr. 
// This quadratic time complexity is due to the nested loops iterating through the array and the operations within each iteration.

// Space Complexity:
// Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N) which is required for sorting.

class Solution {
  searchTriplets(arr) {
    // sort in ascending order  
    arr.sort((a, b) => a - b);
   
    // create output array
    let triplets = [];

    for (let i = 0; i < arr.length; i++) {
      // skip duplicate numbers
      if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      }

      this.findPairs(arr, i, -(arr[i]), triplets)
    }

    return triplets;
  }

  findPairs(arr, i, targetSum, triplets) {
    let left = i + 1, right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === targetSum) { // found the triplet
        triplets.push([-targetSum, arr[left], arr[right]]);
        // Move left and right pointers to skip duplicates
        left += 1;
        right -= 1;
        while (left < right && arr[left] === arr[left - 1]) {
          left += 1; // skip same element to avoid duplicate triplets
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right -= 1; // skip same element to avoid duplicate triplets
        }
      } else if (currentSum < targetSum) {
        left += 1; // we need a pair with a bigger sum
      } else {
        right -= 1; // we need a pair with a smaller sum
      }
    }
  }
}

let sol = new Solution();
sol.tripletSumToZero([-3, 0, 1, 2, -1, 1, -2]); // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]