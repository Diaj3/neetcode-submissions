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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let p1 = l1;
        let p2 = l2;

        /**
         * Use l as a dummy list node
         */
        let l = new ListNode();
        let prev = l;
        let r = 0;

        while (p1 && p2) {
            const v = p1.val + p2.val + r;
            /**
             * Get the digit and carry
             */
            const v1 = v % 10;
            r = Math.floor(v / 10);

            /**
             * Create a new node and attach it
             */
            const node = new ListNode(v1);
            prev.next = node;
            prev = node;

            /**
             * Move pointers forward
             */
            p1 = p1.next;
            p2 = p2.next;
        }

        /**
         * Handle longer list
         */
        let p = p1 ?? p2
        while (p) {
            const v = p.val+r;
            const v1 = v % 10;
            r = Math.floor(v / 10);

            const node = new ListNode(v1);
            prev.next = node;
            prev = node;
            p = p.next;
        }

        /**
         * Handle edge case where rest
         * is still remaining
         */
        if (r>0) {
            const node = new ListNode(r);
            prev.next = node;
        }
        // Return head of new array
        return l.next;
    }
}
