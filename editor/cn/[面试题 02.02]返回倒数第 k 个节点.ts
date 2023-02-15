/**
 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
 
 注意：本题相对原题稍作改动
 
 示例：
 
 输入： 1->2->3->4->5 和 k = 2
 输出： 4
 
 说明：
 
 给定的 k 保证是有效的。
 
 Related Topics 链表 双指针 👍 118 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function kthToLast(head: ListNode | null, k: number): number {
    const hash = new Map()
    let node  = head,
        index = 0
    while (node) {
        index += 1
        hash.set(index, node)
        node = node.next
    }
    return hash.get(index - k + 1).val
}

//leetcode submit region end(Prohibit modification and deletion)
