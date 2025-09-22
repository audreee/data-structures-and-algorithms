/*
203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 
Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 10^4].
1 <= Node.val <= 50
0 <= val <= 50
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let d = new ListNode(0, head)
    let curr = d
    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }

    return d.next
};

/* 
Time Complexity: O(N) -- We iterate through the linked list once
Space Complexity: O(1) -- We only use a couple pointers

Strategy: 
* Create a new dummy node that points to the head
* Create a pointer that points to the dummy node
* While the pointer's next is not null
    * If the pointer's next value is equal to val, we skip the next node by pointing the current node's next to the next node's next
    * Else we move the pointer to the next node
* Return the dummy node's next
*/