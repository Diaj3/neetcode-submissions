/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        // Edge case
        if(!root) {
            return [];
        }

        const res = [];
        let queue = [root];
        
        while(queue.length > 0) {
            const childrenQueue = [];
            /**
             * Last element of the queue is the rightmost
             * node of the current level.
             */
            res.push(queue.at(-1).val);

            while(queue.length > 0) {
                // Add children to the queue for the next level
                const n = queue.shift();
                if(n.left) {
                    childrenQueue.push(n.left);
                }
                if(n.right) {
                    childrenQueue.push(n.right);
                }
            }
            // Process the next level
            queue = childrenQueue;
        }
        return res;
    }
}
