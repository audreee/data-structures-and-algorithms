/* 
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

The number of the nodes in the list is in the range [0, 10^4].
10^5 <= Node.val <= 10^5

Time Complexity:
Once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop. Therefore, the time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

Space Complexity:
This algorithm runs in constant space O(1).
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next; // increment by one node at a time
      fast = fast.next.next; // incremement by two nodes at a time

      if (fast === slow) {return true};
    }
    return false;
  }
}
