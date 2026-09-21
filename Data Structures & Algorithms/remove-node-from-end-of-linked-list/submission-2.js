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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        /**
         * Dummy node allows us to handle
         * removing the head in the same way
         * as removing any other node.
         */
        const dummy = new ListNode();
        dummy.next = head;

        let p1 = dummy;
        let p2 = dummy;

        /**
         * Gap between both pointers is
         * n - 1
         */
        let c = n - 1;

        /**
         * Move the second pointer to the
         * nth position from the START
         */
        while (c > 0) {
            p2 = p2.next;
            c--;
        }

        /**
         * Move pointers until p2 reaches
         * the end of the list
         */
        let prev = p1;

        while (p2 && p2.next) {
            p2 = p2.next;
            prev = p1;
            p1 = p1.next;
        }

        /**
         * Remove the target node
         */
        prev.next = p1.next;

        return dummy.next;
    }
}