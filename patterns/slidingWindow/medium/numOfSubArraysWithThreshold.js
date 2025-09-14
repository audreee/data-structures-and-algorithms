/*
1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

Example 2:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
 
Constraints:

1 <= arr.length <= 10^5
1 <= arr[i] <= 10^4
1 <= k <= arr.length
0 <= threshold <= 10^4
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    threshold *= k;
    let res = 0;
    let winSum = 0;
    for (let r = 0; r < arr.length; r++) {
        winSum += arr[r]
        if (r >= k - 1) {
            if (winSum >= threshold) {
                res++
            }
            winSum -= arr[r - k + 1];
        }
    }
    return res;
};

// Time Complexity: O(N)
// Space Complexity: O(1)
/*
This solution uses a sliding window approach to calculate the sum of each sub-array of size k. 
We maintain a running sum of the current window and update it as we slide the window across the array.
By multiplying the threshold by k at the beginning, we can directly compare the window sum to this value to determine if the average meets the requirement.
*/