## Sliding Window

Often times when dealing with a list (array or LinkedList), we need to find or calculate something among all the possible sublists for a given size. The brute force approach would be to find all possible sublist combinations and calculate the desired result. However, this approach is inefficient and time-consuming. The sliding window pattern is a technique that allows us to optimize the brute force approach by reducing the time complexity to O(N). We can re-use the results of the previous sublist to caluculate the next sublist.

For example: `Given an array, find the average of each subarray of 5 contiguous elements in it.`

Instead of using a nested loop to find each sublist, we can use the sliding window pattern to calculate the average of the first 5 elements. We can use two pointers, one at the beginning of the list and one at the end of the list. Then, we can "slide the window" to the right by adding the next element (end + 1) and subtracting the first element (start). We can repeat this process until we reach the end of the array.

Example:

```javascript
const findAverages = (K, arr) => {
    const result = [];
    let windowSum = 0.0, windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // add the next element
        // slide the window, no need to slide if we've not hit the window size of 'k'
        if (windowEnd >= K - 1) {
            result.push(windowSum / K); // calculate the average
            windowSum -= arr[windowStart]; // subtract the element going out
            windowStart += 1; // slide the window ahead
        }
    }

    return result;
}

let sol = new Solution();
const result = sol.findAverages(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
```

### Common Problems
