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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root || !subRoot) {
            return false;
        }

        let matchingNode = [];
        const findMatch = (root, subRoot) => {
            if(!root) {
                return;
            }
            if (root.val === subRoot.val) {
                matchingNode.push(root);
            }

            findMatch(root.right, subRoot);
            findMatch(root.left, subRoot);
        }
        findMatch(root, subRoot);

        if(!matchingNode) {
            return false;
        }

        const isSame = (t1, t2) => {
            if ((!t1 && t2) || (!t2 && t1)) {
                return false;
            }

            if(!t1 && !t2) {
                return true;
            }

            if(t1.val !== t2.val) {
                return false;
            }

            return isSame(t1.right, t2.right) && isSame(t1.left, t2.left)
        }

        for (const node of matchingNode) {
            if(isSame(node, subRoot)) {
                return true;
            }
        }
        return false;
    }
}
