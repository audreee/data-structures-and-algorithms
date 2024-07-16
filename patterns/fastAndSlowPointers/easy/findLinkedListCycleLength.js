/*
Given the head of a LinkedList with a cycle, find the length of the cycle.

Approach:
1. Use Floyd's Tortoise and Hare algorithm to find a cycle in a Linked List
2. At the meeting point, save the slow pointer
3. Create another pointer to loop through the cycle, incrementing by 1 to represent each node 
4. When the current pointer reaches the starting point, return the count

Time Complexity:
The time complexity of the entire algorithm is O(n), where n is the number of nodes in the linked list. Finding the cycle is O(n), and counting the length is O(k) where k is the number of nodes. Since O(n) is the dominant, the overall is O(n).

Space Complexity:
The space remains constant, so O(1).
*/

class Solution {
  findCycleLength(head) {
    let fast = head, slow = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if (fast === slow) {
        return this.calculateLength(slow)
      }
    }
  }

  calculateLength(node) {
    let current = node;
    let count = 0;
    while (true) {
      current = current.next;
      count++;
      if (current === node) {
        break;
      }
    }
    return count;
  }
}