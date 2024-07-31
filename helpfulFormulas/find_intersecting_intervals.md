# Find Intersecting Intervals

Given two lists of intervals, find the intersecting intervals between them. An intersecting interval is an interval that overlaps with at least one interval in the other list.

## How to determine if intervals are intersecting:
The start value of B should be less than or equal to the end value of A, and the end value of B should be greater than or equal to the start value of A:

```
if (B.start <= A.end && B.end >= A.start) {
  return true;
}
```

## How to find the intersection
The start value of the intersection should be the greater of the two start values, and the end value of the intersection should be the smaller of the two end values.

```
let start = Math.max(A.start, B.start);
let end = Math.min(A.end, B.end);

return new Interval(start, end);
```
