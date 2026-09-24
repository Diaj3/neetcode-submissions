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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode();
        let prev = dummy;
        let current = head;
        let isFirstLoop = true;

        while (current) {
            let target = current;
            let firstNode = current;
            let isTargetReached = true;

            /**
             * Check whether there are at least k nodes.
             */
            for (let i = 0; i < k - 1; i++) {
                if (!target.next) {
                    isTargetReached = false;
                    break;
                }
                target = target.next;
            }
            if (!isTargetReached) {
                break;
            }

            /**
             * Keep the node before the group.
             * This is where the reversed group will be connected.
             */
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
             * Connect the previous group to the new head.
             */
            groupPrev.next = prev;

            /**
             * firstNode is now the tail of the reversed group.
             * Connect it to the next group.
             */
            firstNode.next = current;

            /**
             * The tail of this reversed group becomes
             * the node before the next group.
             */
            prev = firstNode;

            if (!current) {
                break;
            }

            isFirstLoop = false;
        }

        return dummy.next;
    }
}
