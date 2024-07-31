
/*
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.

Example 2:

Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.

Constraints:

0 <= arr1.length, arr2.length <= 1000
arr1.length + arr2.length >= 1
0 <= starti < endi <= 10^9
endi < starti+1
0 <= startj < endj <= 10^9
endj < startj+1

Approach:
1) Initialize two pointers, i and j, to iterate through the two input lists
2) Create a while loop to iterate through the two lists
3) Check if the intervals overlap*
4) If the intervals overlap, find the intersection** and add it to the result list
5) If the end value of the interval in list A is less than the end value of the interval in list B, increment i. Otherwise, increment j.

*How to determine intersecting intervals:
The start value of B should be less than or equal to the end value of A, and the end value of B should be greater than or equal to the start value of A.

if (B.start <= A.end && B.end >= A.start) {
  return true;
}

**How to find the intersection:
The start value of the intersection should be the greater of the two start values, and the end value of the intersection should be the smaller of the two end values.

Time Complexity: O(N)
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {
  merge(intervals_a, intervals_b) {
    let result = [];
    let i = 0, j = 0;

    while (i < intervals_a.length && j < intervals_b.length) {
      // Check if intervals overlap
      if (intervals_b[j].end >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end) {
        // Save the larger start value
        let start = Math.max(intervals_b[j].start, intervals_a[i].start)
        // Save the smaller end value
        let end = Math.min(intervals_b[j].end, intervals_a[i].end)

        result.push(new Interval(start, end))
      }

      // If interval of a ends first, increment i. Otherwise, increment j.
      if (intervals_a[i].end < intervals_b[j].end) {
        i++;
      } else {
        j++;
      }
    }

    return result;
  }
}
