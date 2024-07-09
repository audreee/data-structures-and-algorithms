/*
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.

Example 1:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 3

Example 2:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4

Example 3:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
Output: 4

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

Time Complexity:
Our algorithm will have a time complexity of O(N) where ‘N’ is the number of nodes in the LinkedList.

Space Complexity:
The algorithm runs in constant space O(1).
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  findMiddle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // If the list has an odd number of nodes, fast is null
    // If the list has an even number of nodes, fast is the last node
    // Returning slow returns the second-middle (if even) or middle (if odd) node
    return slow;
  }
}
