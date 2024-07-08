/* 
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.

Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

Example 3:

Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.

Example 4:

Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
Constraints:

1 <= str1.length, str2.length <= 200
str1 and str2 only contain lowercase letters and '#' characters.

Time Complexity:
The time complexity of the above algorithm is O(M+N) where ‘M’ and ‘N’ are the lengths of the two input strings respectively.

Space Complexity:
The algorithm runs in constant space O(1).
*/

class Solution {
  compare(str1, str2) {
    // Create indexes beginning at the last character of each string
    let index1 = str1.length - 1;
    let index2 = str2.length - 1;

    // Iterate while either index is valid
    while (index1 >= 0 || index2 >= 0) {
      // Find the next valid char for each string
      index1 = this.findNextValidChar(index1, str1);
      index2 = this.findNextValidChar(index2, str2);

      // If both strings are done processing, they're equal
      if (index1 < 0 && index2 < 0) {
        return true;
      }

      // If only one string is done processing, they aren't equal
      if (index1 < 0 || index2 < 0) {
        return false;
      }
      
      // Compare characters at the valid indexes from both strings
      if (str1[index1] !== str2[index2]) {
        return false;
      }

      index1--;
      index2--;
    }

    return true;
  }

  findNextValidChar(index, string) {
    let backspaces = 0;

    while (index >= 0) {
      // If the character is a backspace, increment backspaces
      if (string[index] === '#') {
        backspaces++;
        // If the character isn't a backspace, but backspaces > 0, decrement backspaces
      } else if (string[index] !== '#' && backspaces > 0) {
        backspaces--;
         // If the character isn't a backspace and backspaces is 0, return the index
      } else if (string[index] !== '#' && backspaces == 0) {
        break;
      }
      index--;
    }

    return index;
  }
}

const sol = new Solution();
console.log(sol.compare('xy#z', 'xzz#'));
console.log(sol.compare('xy#z', 'xyz#'));
console.log(sol.compare('xp#', 'xyz##'));
console.log(sol.compare('xywrrmp', 'xywrrmu#p'));