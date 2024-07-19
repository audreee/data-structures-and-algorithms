/* 
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should use only constant space the input LinkedList should be modified in-place.

Example 1:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 

Example 2:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null

Constraints:

The number of nodes in the list is in the range [1, 5 * 10^4].
1 <= Node.val <= 1000

Time Complexity:
The time complexity of our algorithm will be O(N) where ‘N’ is the number of nodes in the LinkedList.

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
  reorder(head) {
    if (head === null || head.next === null) {
      return head;
    }

    // Find the middle node
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse the second half of the list
    let secondHead = this.reverse(slow.next);
    // Set the end of the first half to null
    slow.next = null;
    let firstHead = head;

    // Begin at the head, inserting reversed list
    while (secondHead !== null && firstHead !== null) {
      let tmp = firstHead.next;
      firstHead.next = secondHead;
      firstHead = tmp;

      tmp = secondHead.next;
      secondHead.next = firstHead;
      secondHead = tmp;
    }

    return head;
  }

  reverse(head) {
    let prev = null;
    
    while (head !== null) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    return prev;
  }
}

const sol = new Solution();
var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
console.log(sol.reorder(head));