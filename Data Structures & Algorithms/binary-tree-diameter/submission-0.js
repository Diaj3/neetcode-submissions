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
    diameterOfBinaryTree(root) {
        // Store max diameter
        let d = 0;

        const getDepth = (node) => {
            // Edge case
            if (!node) {
                return 0;
            }
            const lDepth = getDepth(node.left);
            const rDepth = getDepth(node.right);

            d = Math.max(d, lDepth + rDepth);

            return 1 + Math.max(lDepth, rDepth);
        };
        getDepth(root);
        
        return d;
    }
}
