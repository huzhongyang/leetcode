/**
 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 
 例如：
 
 给定二叉树 [3,9,20,null,null,15,7]，
 
 3
 / \
 9  20
 /  \
 15   7
 
 返回它的最大深度 3 。
 
 
 
 提示：
 
 
 节点总数 <= 10000
 
 
 注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 
 
 Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 222 👎 0
 
 */

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

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0
    const nodes = [root]
    let depth = 0
    while (nodes.length) {
        let restNodes = nodes.length
        while (restNodes > 0) {
            const node = nodes.shift()
            node.right && nodes.push(node.right)
            node.left && nodes.push(node.left)
            restNodes -= 1
        }
        depth += 1
    }
    return depth
}

//leetcode submit region end(Prohibit modification and deletion)
