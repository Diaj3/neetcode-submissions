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
    maxDepth(root) {
        // Edge case
        if (!root) {
            return 0;
        }

        /**
         * Get the depth of both subtrees.
         * The current node adds 1 to the deeper subtree.
         */
        return 1 + Math.max(
            this.maxDepth(root.left),
            this.maxDepth(root.right)
        );
    }
}