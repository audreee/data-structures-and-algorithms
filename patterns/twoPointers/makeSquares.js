// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

// Constraints:

// 1 <= arr.length <= 104
// -104 <= arr[i] <= 104
// arr is sorted in non-decreasing order.

// The above algorithm’s time complexity will be O(n) as we are iterating the input array only once.
// The above algorithm’s space complexity will also be O(n); this space will be used for the output array.

class Solution {
  makeSquares(arr) {
    const n = arr.length;
    let squares = Array(n).fill(0);
    let left = 0, right = n - 1;
    let insert = n - 1;

    while (left <= right) {
      let leftSquare = arr[left] ** 2;
      let rightSquare = arr[right] ** 2;

      if (leftSquare > rightSquare) {
        squares[insert] = leftSquare;
        left++;
      } else {
        squares[insert] = rightSquare;
        right--;
      }
      insert--;
    }

    return squares;
  }
}

let sol = new Solution();
console.log(sol.makeSquares([-2, -1, 0, 2, 3]));