## Fast and Slow Pointers

## Background

Floyd's Tortoise and Hare Algorithm moves two pointers through a list of values until both pointers meet at the same value. The algorithm is also known as the Fast and Slow Pointers algorithm.By moving at different speeds (say, in a cyclic LinkedList), the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

## How to use it

Initialize two pointers, one "fast" and one "slow." The fast pointer moves two steps at a time, while the slow pointer moves one step at a time. If the pointers meet, there is a cycle in the list. If the pointers do not meet, there is no cycle in the list.

Example:

```
const detectCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // increment by one node at a time
    fast = fast.next.next; // incremement by two nodes at a time

    if (fast === slow) {return true};
  }
  return false;
}
```  

## Common Problems
- Find the start of the cycle in a LinkedList
- Find the middle of a LinkedList
- Find the length of a cycle in a LinkedList
- Determine if a LinkedList is a palindrome
- Find happy numbers
- Rearrange a LinkedList