/*
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

Constraints:

1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^5
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 10^5

Time Complexity: O(N)
Space Complexity: O(N) (for the output list)
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {
  insert(intervals, new_interval) {
    let merged = [];
    let i = 0;

    // Push all intervals before the new interval
    while (i < intervals.length && intervals[i].end < new_interval.start) {
      merged.push(intervals[i])
      i++;
    }

    // Merge all intervals that overlap with the new interval into the new interval
    while (i < intervals.length && new_interval.end >= intervals[i].start) {
      new_interval.start = Math.min(new_interval.start, intervals[i].start);
      new_interval.end = Math.max(new_interval.end, intervals[i].end);
      i++;
    }

    // Add the new interval to the list
    merged.push(new_interval);

    // Add all remaining intervals to the list
    while (i < intervals.length) {
      merged.push(intervals[i])
      i++;
    }

    return merged;
  }
}
