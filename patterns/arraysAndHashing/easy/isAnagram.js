/*
Valid Anagram
Solved 
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.
*/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sCount = {};
        let tCount = {};

        for (let i = 0; i < s.length; i++) {
            sCount[s[i]] =  (sCount[s[i]] || 0) + 1;
            tCount[t[i]] =  (tCount[t[i]] || 0) + 1;
        }

        for (let key in sCount) {
            if (sCount[key] !== tCount[key]) {
                return false
            }
        }

        return true
    }
}

/*
Time complexity: O(n+m)
Space complexity: O(1)

Where n is the length of s and m is the length of t
*/

class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = {};

        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }

        for (let key in count) {
            if (count[key] !== 0) return false;
        }

        return true;
    }
}
