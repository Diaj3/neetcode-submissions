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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        while (root) {
            /**
             * If root is either p or q, then root is
             * the lowest common ancestor.
             */
            if (p.val === root.val || q.val === root.val) {
                return root;
            }
            /**
             * If both are smaller or bigger, we move the
             * root to either the left or the right (accordingly)
             */
            if(p.val > root.val && q.val > root.val) {
                root = root.right;
                continue;
            }
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
                continue;
            }
            /**
             * If none of the conditions above are met,
             * root must be smaller than one and bigger
             * than the other, making it the last common
             * ancestor
             */
            return root;
        }
    }
}
