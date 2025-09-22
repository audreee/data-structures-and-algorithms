/* 
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 
Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

Constraints:

The number of nodes in the list is in the range [1, 10^5].
0 <= Node.val <= 9
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    if (fast) {
        slow = slow.next
    } 

    let curr = slow
    let prev = null

    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    while (prev) {
        if (head.val !== prev.val) {
            return false
        }

        head = head.next
        prev = prev.next
    }

    return true
};

/*
Time Complexity: O(N) -- We traverse the linked list a constant number of times (we only reverse half the list)
Space Complexity: O(1) -- We only use a couple pointers

Strategy:
* Use the fast and slow pointer technique to find the middle of the linked list
* Determine if the linked list has an odd or even number of elements by checking if the fast pointer is null or not.
* If the linked list has an odd number of elements (the fast pointer is not null), move the slow pointer one step forward to skip the middle element
* Reverse the second half of the linked list
* Compare the values of the first half and the reversed second half of the linked list node by node
* If all corresponding nodes are equal, return true; otherwise, return false
*/