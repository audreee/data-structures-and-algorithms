/*
83. Remove Duplicates from Sorted List
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let curr = head
    while (curr && curr.next) {
        let next = curr.next
        while (next && next.val === curr.val) {
            next = next.next
        }
        curr.next = next
        curr = curr.next
    }

    return head
};

/*
Time Complexity: O(N) -- We iterate through the linked list once
Space Complexity: O(1) -- We only use a couple pointers
Strategy:
* Create a pointer that points to the head
* While the pointer and the pointer's next is not null
    * Create a next pointer that points to the pointer's next
    * While the next pointer is not null and the next pointer's value is equal to the pointer's value
        * Move the next pointer to the next node
    * Set the pointer's next to the next pointer
    * Move the pointer to the next node
* Return the head
*/