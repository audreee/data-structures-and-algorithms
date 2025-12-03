/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let word of strs) {
            let count = new Array(26).fill(0);
            for (let char of word) {
                count[this.getIndex(char)]++; 
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(word);
        }
        return Object.values(res);
    }

    getIndex(letter) {
        let ascii = letter.charCodeAt(0);
        return ascii - 'a'.charCodeAt(0);
    }
}

/*
Time complexity: O(N*M)
Space complexity: O(M)

Where N is the number of strings in the input array and M is the maximum length of a string in the input array.
*/

/*
Since anagrams are made up of the same frequency of letters, we can use a frequency count as a unique identifier for each group of anagrams.
By counting the occurrences of each letter in a word, we can create a key that represents that word's character composition.
Then, we store each word in a hash map where the key is this frequency count.

Steps:
1. Initialize an empty object res to store the grouped anagrams.
2. Loop through each word in the input array strs.
3. For each word, create a count array of size 26 (for each letter in the alphabet) and initialize all values to 0.
4. Loop through each character in the word and increment the corresponding index in the count array.
5. Convert the count array to a string key by joining its elements with a comma.
6. If the key does not exist in res, initialize it with an empty array.
7. Push the current word into the array corresponding to the key in res.
8. After processing all words, return the values of res as an array of arrays.
*/