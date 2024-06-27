# C Choose 2

(c * (c - 1)) / 2

This formula is helpful for calculating the number of ways to choose two items from a set of c items.

## How it works

- c×(c−1) gives the product of the number of items and one less than the number of items.
- Dividing by 2 accounts for the fact that the order of selection does not matter (i.e., choosing item A and then item B is the same as choosing item B and then item A).

## Use Cases

In programming, you might use this formula to determine the number of "good pairs" in a list of numbers where a "good pair" is defined by some condition, like having the same value.

For instance, in the context of the LeetCode problem "Number of Good Pairs":

After counting the frequency of each number in the array, you use the formula to determine how many good pairs can be formed with that number.

```
function chooseTwo(c) {
    return (c * (c - 1)) / 2;
}

console.log(chooseTwo(4)); // Output: 6
console.log(chooseTwo(5)); // Output: 10
```