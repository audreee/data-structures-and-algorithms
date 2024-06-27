# Overflow Safe Midpoint

Instead of calculating the middle with (left + right) / 2, you should use:

left + (right - left) / 2

- You have two pointers: left and right, representing the current bounds of your search range.
- Calculate the difference between right and left: right - left.
- This difference represents the width of the search range.
- Divide the width of the search range by 2: (right - left) / 2.
- This gives you the distance from left to the midpoint of the search range.
- Add the distance from left to the midpoint to left: left + ((right - left) / 2).
- This effectively shifts the midpoint calculation to start from left instead of from 0.

## Uses
Binary Search

## Example

Standard Calculation:
```
pivot = (left + right) / 2
pivot = (100 + 200) / 2
pivot = 300 / 2
pivot = 150
```

Safe Calculation:
```
pivot = left + (right - left) / 2
pivot = 100 + (200 - 100) / 2
pivot = 100 + 100 / 2
pivot = 100 + 50
pivot = 150
```

This method avoids the addition of two potentially large numbers before the division, thereby preventing overflow.
