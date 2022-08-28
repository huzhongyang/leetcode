//给定一个二叉树，检查它是否是镜像对称的。
//
//
//
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//
//     1
//   / \
//  2   2
// / \ / \
//3  4 4  3
//
//
//
//
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//
//     1
//   / \
//  2   2
//   \   \
//   3    3
//
//
//
//
// 进阶：
//
// 你可以运用递归和迭代两种方法解决这个问题吗？
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 1610 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    /* 递归
    if (root === null) return true

    function check(leftNode, rightNode) {
        if (leftNode === null && rightNode === null) return true
        if (leftNode === null && rightNode !== null || leftNode !== null && rightNode === null) return false
        if (leftNode.val !== rightNode.val) return false
        return check(leftNode.left, rightNode.right) && check(leftNode.right, rightNode.left)
    }

    return check(root.left, root.right)*/

    // 迭代
    let node = []
    if (root === null) return true
    if (root.left === null && root.right !== null || root.left !== null && root.right === null) return false
    node.push(root.left)
    node.push(root.right)
    while (node.length) {
        let right = node.shift()
        let left = node.shift()
        if (left === null && right === null) continue
        if (left === null || right === null || left.val !== right.val) return false
        node.push(left.left)
        node.push(right.right)
        node.push(left.right)
        node.push(right.left)
    }
    return true
}
//leetcode submit region end(Prohibit modification and deletion)
