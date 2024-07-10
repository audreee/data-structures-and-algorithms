/*
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

Time Complexity:
As we know, finding the cycle in a LinkedList with ‘N’ nodes and also finding the length of the cycle requires O(N). 
Also, as we have found the cycle, let’s say the length of the cycle is ‘K’. 
We will need O(K) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N).

Space Complexity:
The algorithm runs in constant space O(1).

How it works:
1. Find the cycle using Floyd's Tortoise and Hare algorithm
2. Once the cycle is found, reset the slow pointer to the head
3. Move both pointers at the same speed
4. The pointers will meet at the start of the cycle. 

The distance from the head to the start of the cycle is equal to the distance from the meeting point to the start of the cycle. 
This is because the two pointers are separated by exactly one cycle's length when they first meet.
Therefore, when the slow pointer moves from the head and the fast pointer moves from the meeting point, 
they will meet at the start of the cycle. This is the point where both pointers have traveled the same distance.
*/

/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

class Solution {
  findCycleStart(head) {
    let fast = head, slow = head;

    // Use Floyd's Tortoise and Hare algorithm to find the cycle
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next

        // If the slow and fast pointers meet, we found a cycle
        if (fast === slow) {

            // Reset the slow pointer to the head
            slow = head;
            
            // Move both pointers at the same speed
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            // The pointers have collided for a second time, so we found the start of the cycle
            return slow;
        }
    }

    // If there is no cycle, return null
    return null;
  }
}

const sol = new Solution();
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

// Create a cycle by connecting nodes
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${sol.findCycleStart(head).val}`);

// Create a different cycle
head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${sol.findCycleStart(head).val}`);

// Create a cycle that points back to the head
head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${sol.findCycleStart(head).val}`);
