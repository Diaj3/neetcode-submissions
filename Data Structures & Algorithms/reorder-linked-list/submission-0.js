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
     * @return {void}
     */
    reorderList(head) {
        /**
         * Find the middle of the list
         * p1 will represent just that
         */
        let p1 = head;
        let p2 = head;
        while (p2 && p2.next) {
            p1 = p1.next;
            p2 = p2.next.next;
        }

        /**
         * Reverse the second half of the
         * list
         */
        let p = null;
        while (p1) {
            let n = p1.next;
            p1.next = p;
            p = p1;
            p1 = n;
        }

        /**
         * We now have one on each end
         */
        while (p && p.next) {
            let h = head.next;
            let h2 = p.next;

            head.next = p;
            p.next = h

            head = h;
            p = h2;
        }
    }
}
