/* 
You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: arr=['A', 'B', 'C', 'A', 'C']  
Output: 3  
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:

Input: arr = ['A', 'B', 'C', 'B', 'B', 'C']  
Output: 5  
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

Constraints:

1 <= arr.length <= 10^5
0 <= arr[i] < arr.length

Time Complexity:
The time complexity of the above algorithm will be O(N), where ‘N’ is the number of elements in the input array.

Space Complexity:
The algorithm runs in constant space O(1) since there are a maximum of 3 types of fruits stored in the hashmap.
*/

class Solution {
  findLength(fruits) {
    let maxLength = 0;
    let fruitsFrequency = {};
    let currentLength = 0;
    let start = 0;

    for (let end = 0; end < fruits.length; end++) {
      // Increment frequency count if fruit is present in hashmap
      if (fruitsFrequency[fruits[end]]) {
        fruitsFrequency[fruits[end]]++;
      } else {
        // Set frequency to 1 if fruit isn't present in hashmap
        fruitsFrequency[fruits[end]] = 1;
      }

      // Increment current length
      currentLength++;

      while (Object.keys(fruitsFrequency).length > 2) {
        // Decrement frequency for fruit from start of window
        fruitsFrequency[fruits[start]]--;

        // Delete the key from hashmap if frequency for fruit is 0
        if (fruitsFrequency[fruits[start]] === 0) {
          delete fruitsFrequency[fruits[start]];
        }

        // Decrement current length
        currentLength--;

        // Slide window to the left
        start++;
      }

      // Update the maxLength with the greater length
      maxLength = Math.max(currentLength, maxLength);
    }

    return maxLength;
  }
}

let sol = new Solution();
console.log(sol.findLength(["A", "B", "C", "A", "C"])) // 3
