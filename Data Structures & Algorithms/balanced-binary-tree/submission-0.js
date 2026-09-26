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
     * @return {boolean}
     */
    isBalanced(root) {
        const getHeight = (node) => {
            // Empty subtree has a height of 0
            if (!node) {
                return 0;
            }

            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right);

            // If either subtree is already unbalanced, propagate -1
            if (leftHeight === -1 || rightHeight === -1) {
                return -1;
            }

            // Current node is unbalanced
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }

            // Return the height of the current subtree
            return 1 + Math.max(leftHeight, rightHeight);
        };

        return getHeight(root) !== -1;
    }
}