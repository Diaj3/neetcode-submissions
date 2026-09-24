/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const mockList = new ListNode();
        let listNode = mockList;
        const minHeap = new MinHeap();

         for(let i=0;i<lists.length;i++) {
            // Push the head of each non-empty list
            if (lists[i]) {
                minHeap.push(lists[i]);
            }
         }
         
         while(minHeap.heap.length) {
            let n = minHeap.pop();
            listNode.next = n;
            listNode = n;
            if (n.next) {
                minHeap.push(n.next);
            }
         }

         return mockList.next;
    }
}

/**
 * Use Min Heap to fetch the 
 * smallest value
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        // Add the new node at the end of the heap
        this.heap.push(node);

        let i = this.heap.length - 1;
        
        // Move the node upward until the min-heap property is restored
        while (i > 0) {
            // Find the parent of the current node
            const parent = Math.floor((i - 1) / 2);

            /**
             * Break if parent is smaller
             * Swap positions until condition is met
             */
            if (this.heap[parent].val <= this.heap[i].val) {
                break;
            }
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

            // Continue from the node's new position
            i = parent;
        }
    }

    pop() {
        // Edge case if heap is empty
        if (this.heap.length === 0) {
            return null;
        }

        // Remove smallest, then restore heap
        let i = this.heap.length - 1;
        let root = this.heap[0];

        // Move the last element to the root
        [this.heap[i], this.heap[0]] = [this.heap[0], this.heap[i]];

        // Remove the old root
        this.heap.pop();

        // Start bubbling down from the root
        i = 0;
        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            // No children
            if (left >= this.heap.length) {
                break;
            }

            let min = left;

            // Use right child if it exists and is smaller
            if (
                right < this.heap.length &&
                this.heap[right].val < this.heap[left].val
            ) {
                min = right;
            }

            // Heap property is already satisfied
            if (this.heap[i].val <= this.heap[min].val) {
                break;
            }

            // Swap with the smaller child
            [this.heap[i], this.heap[min]] =
                [this.heap[min], this.heap[i]];

            // Continue from the node's new position
            i = min;
        }

        return root;
    }
}