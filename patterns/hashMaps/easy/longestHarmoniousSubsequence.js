/*
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

 
Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation:
The longest harmonious subsequence is [3,2,2,2,3].

Example 2:
Input: nums = [1,2,3,4]
Output: 2
Explanation:
The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

Example 3:
Input: nums = [1,1,1,1]
Output: 0
Explanation:
No harmonic subsequence exists.

 
Constraints:
1 <= nums.length <= 2 * 10^4
-109 <= nums[i] <= 10^9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let freqs = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        if (freqs.has(nums[i])) {
            freqs.set(nums[i], freqs.get(nums[i]) + 1)
        } else {
            freqs.set(nums[i], 1)
        }
    }
    
    let longest = 0
    freqs.forEach((count, num) => {
        if (freqs.has(num + 1)) {
            let length = count + freqs.get(num + 1);
            longest = Math.max(longest, length)
        }
    })

    return longest;
};

/*
Time Complexity: O(N) -- We iterate over the nums to build the map O(n) and then we iterate over the map O(n) --> O(N) + O(N) = O(N)
Space Complexity: O(N) -- Store each unique number

This solution uses a hash map to count the frequency of each number in the array. 
Then, it iterates through the keys of the hash map and checks if the next consecutive number (num + 1) exists in the map. 
If it does, it calculates the length of the harmonious subsequence by adding the counts of the current number and its consecutive number. 
The maximum length found during this process is returned as the result.
*/