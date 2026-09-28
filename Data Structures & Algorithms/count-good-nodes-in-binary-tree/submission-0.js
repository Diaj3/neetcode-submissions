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
    goodNodes(root) {
        // Edge case
        if(!root) {
            return 0;
        }

        let c = 0;
        /**
         * Traverse through the tree and
         * increment count on every node
         * whose value is bigger than path
         * parent nodes
         */
        const getCount = (node, max) => {
            if(node.val >= max) {
                c++;
                max = node.val;
            }
            if(node.left) {
                getCount(node.left, max);
            }
            if(node.right) {
                getCount(node.right, max);
            }
        }
        getCount(root, -Infinity);
        return c;
    }
}
