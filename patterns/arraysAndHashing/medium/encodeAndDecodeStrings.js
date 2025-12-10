/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => {
            let length = str.length;
            return `${length}#` + str
        }).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 4#neet4#code4#love3#you
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let length = '';
            while (str[i] !== '#') {
                length += str[i]
                i++;
            }
            let num = parseInt(length);
            let start = i + 1;
            let word = str.substring(start, start + num);
            res.push(word);
            i = start + num;
        }
        return res;
    }
}

/*
Time Complexity: O(m) for both encode and decode
Space Complexity: O(n + m)

Where m is the sum of lengths of all the strings and is the number of strings.
*/