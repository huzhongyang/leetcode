//请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。 
//
// 
//
// 例如: 给定二叉树: [3,9,20,null,null,15,7], 
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
// 
//
// 返回其层次遍历结果： 
//
// [
//  [3],
//  [20,9],
//  [15,7]
//]
// 
//
// 
//
// 提示： 
//
// 
// 节点总数 <= 1000 
// 
//
// Related Topics 树 广度优先搜索 二叉树 👍 259 👎 0


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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return []
    const nodeQueue = [root]
    const res = []
    let flag = 0
    while (nodeQueue.length !== 0) {
        const temp = []
        for (let i = 0, len = nodeQueue.length; i < len; i++) {
            const node = nodeQueue.shift()
            temp.push(node.val)
            node.left && nodeQueue.push(node.left)
            node.right && nodeQueue.push(node.right)
        }
        if (flag === 0) {
            res.push(temp)
            flag = 1
        } else {
            res.push(temp.reverse())
            flag = 0
        }
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)
