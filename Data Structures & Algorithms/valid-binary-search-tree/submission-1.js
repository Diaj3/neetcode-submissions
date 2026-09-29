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
    isValidBST(root) {
        if (!root) {
            return true;
        }
        let isValidTree = true;
        const checkIfValidBST = (node, min = -Infinity, max = Infinity) => {
            if(node.val >= max || node.val <= min) {
                isValidTree = false;
            }
            if (node.left) {
                checkIfValidBST(node.left, min, node.val);
            }
            if (node.right) {
                checkIfValidBST(node.right, node.val, max);
            }
        };
        checkIfValidBST(root);
        return isValidTree;
    }
}
