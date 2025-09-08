/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:

1 <= nums.length <= 10^5
-109 <= nums[i] <= 10^9
0 <= k <= 10^5
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const window = new Set(); 
    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) {
            return true;
        } else {
            window.add(nums[i])
            if (i >= k) {
                window.delete(nums[i - k])
            }
        }
    }
    return false;
};

/*
Time Complexity: O(N)
Space Complexity: O(k) -- The space complexity is O(k) because the sliding window can hold at most k elements at any time. 

As we iterate through the array, we add elements to the set and remove the oldest element when the size of the window exceeds k.
We check for duplicates in the window, and if we find one, return true.

*/