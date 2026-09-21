// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
            return null;
        }

        const h = new Map();
        let p1 = head;
        /**
         * Map all values of the linked list
         * with a respective copy
         */
        while(p1) {
            const copy = new Node(p1.val);
            h.set(p1, copy);
            p1 = p1.next;
        }

        /**
         * Iterate over the linked list again
         * and properly link all copies next 
         * and random fields
         */
        let p2 = head;
        while(p2) {
            const copy = h.get(p2);
            copy.random = p2.random ? h.get(p2.random) : null;
            copy.next = p2.next ? h.get(p2.next) : null;
            p2 = p2.next;
        }

        // Return copy list head
        return h.get(head);
    }
}
