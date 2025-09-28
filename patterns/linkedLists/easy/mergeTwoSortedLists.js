/*
21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 
Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

// Solution 1: Create a new linked list and merge the two lists into the new list
var mergeTwoLists = function(list1, list2) {
    let m = new ListNode(0, null)
    let res = m
    let p1 = list1
    let p2 = list2
    while (p1 && p2) {
        if (p1.val > p2.val) {
            m.next = p2
            p2 = p2.next
        } else {
            m.next = p1
            p1 = p1.next
        }
        m = m.next
    }

    if (p1) { m.next = p1}
    if (p2) { m.next = p2}

    return res.next
};

// Time Complexity: O(N + M) -- We iterate through both linked lists once
// Space Complexity: O(1) -- We only use a couple pointers, but we do make a new list
// Strategy:
// * Create a new linked list with a dummy node
// * Create two pointers that point to the heads of the two linked lists
// * While both pointers are not null
//     * Compare the values of the two pointers
//     * Append the smaller value to the new linked list and move the corresponding pointer to the next node
// * If one of the pointers is not null, append the rest of the nodes to the new linked list
// * Return the new linked list, starting from the node after the dummy node

// Solution 2: Merge the two lists in place without creating a new list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let d = new ListNode(0, null)
    let curr = d

    while (list1 && list2) {
        if (list1.val > list2.val) {
            curr.next = list2
            list2 = list2.next
        } else {
            curr.next = list1
            list1 = list1.next
        }
        curr = curr.next
    }

    if (list1) curr.next = list1
    if (list2) curr.next = list2

    return d.next
};
// Time Complexity: O(N + M) -- We iterate through both linked lists once
// Space Complexity: O(1) -- We only use a couple pointers
// Strategy:
// * Create a new dummy node that points to null
// * Create a pointer that points to the dummy node
// * While both list1 and list2 are not null
//     * Compare the values of the two lists
//     * Append the smaller value to the new linked list and move the corresponding list to the next node
//     * Move the curr pointer to the next node
// * If one of the lists is not null, append the rest of the nodes to the new linked list
// * Return the dummy node's next