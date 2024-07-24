# Merge Intervals

In many problems involving intervals, you will need to merge the intervals or detect overlapping intervals. Given two intervals (‘a’ and ‘b’), there will be six different ways the two intervals can relate to each other:
1. a and b do not overlap (a comes before b)
2. a and b overlap, b ends after a
3. a completely overlaps b
4. a and b overlap, a ends after b
5. b completely overlaps a
6. a and b do not overlap (b comes before a)

To merge overlapping intervals, we need to follow these steps:
1. Sort the intervals by their start value so that a.start <= b.start
2. Create a list to store the merged intervals
3. Iterate through the intervals, comparing the current interval's start with the last merged interval's end to check if they overlap
   3.a. If the current interval's start is less than or equal to the last merged interval's end, set the last merged interval's end to the maximum of the current's end and the last merged's end
   3.b. Otherwise, add the current interval to the merged list
4. Return the merged list