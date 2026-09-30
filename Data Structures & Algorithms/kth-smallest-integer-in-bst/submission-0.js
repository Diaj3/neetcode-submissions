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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // Edge case
        if (!root) {
            return [];
        }

        let arr = [];

        /**
         * In-order traversal of a BST visits values in ascending order:
         * left subtree → node → right subtree.
         */
        const getOrderedArr = (node) => {
            if (node.left) {
                getOrderedArr(node.left);
            }

            arr.push(node.val);

            if (node.right) {
                getOrderedArr(node.right);
            }
        };

        getOrderedArr(root);

        // Return the kth smallest value (1-indexed).
        return arr[k - 1];
    }
}