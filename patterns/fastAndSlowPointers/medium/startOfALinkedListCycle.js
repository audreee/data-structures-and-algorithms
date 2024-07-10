/*
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

Time Complexity:
As we know, finding the cycle in a LinkedList with ‘N’ nodes and also finding the length of the cycle requires O(N). 
Also, as we have found the cycle, let’s say the length of the cycle is ‘K’. 
We will need O(K) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N).

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
  findCycleStart(head) {
    let cycleLength;

    // Use fast and slow pointers to find the cycle
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        // Calculate the length of the cycle
        cycleLength = this.findCycleLength(fast)
        break;
      }
    }

    // Move pointer2 ahead by 'n', where 'n' is the length of the cycle
    let pointer1 = head, pointer2 = head;
    for (let i = 0; i < cycleLength; i++) {
      pointer2 = pointer2.next;
    }

    while (pointer2) {
      // Increment both pointers by a step
      pointer2 = pointer2.next;
      pointer1 = pointer1.next;

        // Pointers will meet at the start of the cycle
      if (pointer1 === pointer2) {
        return pointer2;
      }
    }
  }

  findCycleLength(head) {
    // Set a pointer at the current node
    let current = head;
    
    // Create a variable to store the node count
    let count = 0;
    
    while (true) {
      // Increment the pointer by a step, increasing the counter
      current = current.next;
      count++;
      
      // Once the pointer reaches the starting node, we've found the length
      if (current === head) {
        return count;
      }
    }
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
