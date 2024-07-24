/*
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].

Example 2:

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

Example 3:

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.

Constraints:

1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^4

Time Complexity:
The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating through the intervals only once which will take O(N), but since we need to sort the intervals, our algorithm will take O(N * logN).

Space Complexity:
The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals.
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}*/

class Solution {
  merge(intervals) {
    // Sort the intervals by the first value
    intervals.sort((a, b) => a[0] - b[0]);
    
    const mergedIntervals = [intervals[0]];
    
    // Remove first element, since we already added it
    intervals.unshift();

    // Loop through each interval
    intervals.forEach(interval => {
      let currentStart = interval[0];
      let lastEnd = mergedIntervals[mergedIntervals.length - 1][1];

      if (currentStart <= lastEnd) {
        // Set the last element of the last merged interval to the greater of the currentEnd and lastEnd
        mergedIntervals[mergedIntervals.length - 1] = Math.max(interval[1], lastEnd)
      } else {
        // Intervals aren't overlapping, so add the current interval
        mergedIntervals.push(interval)
      }
    })
    
    return mergedIntervals;
  }
}
