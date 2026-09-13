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
     * @return {ListNode}
     */
    reverseList(head) {
        let p = null;
        let c = head;
        while (c !== null) {
            let next = c.next;
            c.next = p;
            p = c;
            c = next;
        }
        return p;
    }
}
