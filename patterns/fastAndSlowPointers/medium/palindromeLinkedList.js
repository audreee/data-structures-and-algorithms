/*
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. 
The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

Example 1:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Example 2:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false
Constraints:

The number of nodes in the list is in the range [1, 10^5].
0 <= Node.val <= 9

Time Complexity:
The time complexity of our algorithm will be O(N) where ‘N’ is the number of nodes in the LinkedList.

Space Complexity:
The algorithm runs in constant space O(1).

Approach:
1. Find the middle of the LinkedList using the slow and fast pointers
2. Reverse the second half of the LinkedList
3. Compare the first and second halves
4. Reverse the second half to restore the LinkedList
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  isPalindrome(head) {
    if (head === null || head.next === null) {
      return true;
    }

    let slow = head, fast = head;

    // Find the mid-point node
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse the second half
    let secondHalfHead = this.reverse(slow);
    // Store a copy to reverse later
    let secondHalfHeadCopy = secondHalfHead
    
    // Compare the first and second half
    while (head && secondHalfHead) {
      // If head and secondHalfHead aren't equal, not a palindrome
      if (head.val !== secondHalfHead.val) {
        return false;
      }

      head = head.next;
      secondHalfHead = secondHalfHead.next;
    }

    // Reverse second half to restore LinkedList
    this.reverse(secondHalfHeadCopy)
    return true;
  }

  reverse(head) {
    let curr = head;
    let prev = null;

    while (curr) {
      // Set next to the node after current node
      let next = curr.next;
      // Reverse by pointing current node to the previous node
      curr.next = prev;
      // Advance the previous node to the current node
      prev = curr;
      // Set the current node to the next node
      curr = next;
    }

    // Current node will be null, so return the previous node
    return prev;
  }
}

const sol = new Solution();
const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
console.log("Is palindrome:", sol.isPalindrome(head));

head.next.next.next.next.next = new Node(2);
console.log("Is palindrome:", sol.isPalindrome(head));