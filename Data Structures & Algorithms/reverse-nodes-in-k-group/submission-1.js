/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode();
        let prev = dummy;
        let current = head;

        while (current) {
            let target = current;
            let firstNode = current;
            let isTargetReached = true;

            /**
             * Check whether there are at least k nodes
             * available in the current group.
             */
            for (let i = 0; i < k - 1; i++) {
                if (!target.next) {
                    isTargetReached = false;
                    break;
                }

                target = target.next;
            }

            // Leave the remaining nodes untouched.
            if (!isTargetReached) {
                break;
            }

            // Save the node before this group.
            let groupPrev = prev;

            /**
             * Reverse the k nodes.
             */
            for (let i = 0; i < k; i++) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            /**
             * Connect:
             *
             * previous group → reversed group → next group
             */
            groupPrev.next = prev;
            firstNode.next = current;

            /**
             * firstNode is now the tail of the reversed group,
             * so it becomes the previous node for the next group.
             */
            prev = firstNode;
        }

        return dummy.next;
    }
}
