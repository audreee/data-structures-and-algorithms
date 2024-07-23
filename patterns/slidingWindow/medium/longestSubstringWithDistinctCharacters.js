/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: str="araaci", K=2  
Output: 4  
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:

Input: str="araaci", K=1  
Output: 2  
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:

Input: str="cbbebi", K=3  
Output: 5  
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

Constraints:

1 <= str.length <= 5 * 10^4
0 <= K <= 50

Time Complexity:
The time complexity of the above algorithm will be O(N) where ‘N’ is the number of characters in the input string. The outer for loop runs for all characters and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).

Space Complexity:
The space complexity of the algorithm is O(K), as we will be storing a maximum of ‘K+1’ characters in the HashMap.
*/

class Solution{
  findLength(str, k) {
    let maxLength = 0;
    let start = 0;
    let currentLength = 0;
    let letters = {}; 
    for (let end = 0; end < str.length; end++) {
      // If there's a key in letters, increment by 1. Else, add a key with val 1
      letters[str[end]] ? letters[str[end]]++ : letters[str[end]] = 1;
      // Increment the currentLength by 1
      currentLength++;

      while (Object.keys(letters).length > k) {
        // If letters is 1, remove that key
        if (letters[str[start]] === 1) {
          delete letters[str[start]];
          // If there is more than one occurrence of the letter, decrement it by 1
        } else if (letters[str[start]]) {
          letters[str[start]]--;
        }
        currentLength--;
        start++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
  }
}

let sol = new Solution();
console.log(sol.findLength("araaci", 2))