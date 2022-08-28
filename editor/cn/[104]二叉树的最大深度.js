"use strict";
//给定一个二叉树，找出其最大深度。
//
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例： 给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// 返回它的最大深度 3 。
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1339 👎 0
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function maxDepth(root) {
    if (root === null)
        return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length > 0) {
        depth += 1;
        let current = queue.length;
        while (current--) {
            const node = queue.shift();
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
        }
    }
    return depth;
}
//leetcode submit region end(Prohibit modification and deletion)
//# sourceMappingURL=%5B104%5D%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.js.map