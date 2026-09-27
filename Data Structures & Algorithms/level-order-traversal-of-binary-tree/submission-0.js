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
     * @return {number[][]}
     */
    levelOrder(root) {
        // Edge case
        if(!root) {
            return [];
        }

        // Initial queue
        let queue = [root];
        const res = [];
        /**
         * Process one level at a time.
         * The current queue contains all nodes from the current level,
         * while their children are collected to form the next level.
         */
        while(queue.length > 0) {
            let arrayEntry = [];
            const childrenQueue = [];
            while(queue.length > 0) {
                // FIFO so remove first node
                const node = queue.shift();
                
                // Add children to the children queue
                if(node.left) {
                    childrenQueue.push(node.left);
                }
                if(node.right) {
                    childrenQueue.push(node.right);
                }

                arrayEntry.push(node.val);
            }
            /**
             * Only add an entry if the current
             * level has any nodes
             */
            if(arrayEntry.length > 0) {
                res.push(arrayEntry);
            }
            /**
             * Re-assing the children to queue 
             * for the next level iteration
             */
            queue = childrenQueue;
        }
        return res;
    }
}
