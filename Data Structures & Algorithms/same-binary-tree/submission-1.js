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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if((!p && q) || (p && !q)) {
            return false;
        }

        if((p && q) && (p.val !== q.val)) {
            return false;
        }

        if((!p && !q)) {
            return true;
        }

        return this.isSameTree(p.right, q.right) && this.isSameTree(p.left, q.left);;
    }
}
