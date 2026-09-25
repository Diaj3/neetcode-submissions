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
     * @return {number}
     */
    maxDepth(root, count = 0, maxCount = 0) {
        // Edge case
        if (!root) {
            return maxCount;
        }
        // Increment the count on new node
        count++;

        /**
         * If leaf node, compare the current
         * count to the max and re-assing new
         * max if needed
         */
        if (!root.left && !root.right) {
            maxCount = Math.max(count, maxCount);
        }

        // Search for both child nodes
        maxCount = this.maxDepth(root.left, count, maxCount);
        maxCount = this.maxDepth(root.right, count, maxCount);

        return maxCount;
    }
}
