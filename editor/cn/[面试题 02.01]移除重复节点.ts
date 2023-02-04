/**
 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 
 示例1:
 
 
 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]
 
 
 示例2:
 
 
 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]
 
 
 提示：
 
 
 链表长度在[0, 20000]范围内。
 链表元素在[0, 20000]范围内。
 
 
 进阶：
 
 如果不得使用临时缓冲区，该怎么解决？
 
 Related Topics 哈希表 链表 双指针 👍 174 👎 0
 
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

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    const set = new Set()
    let node = head
    while (node) {
        set.add(node.val)
        while (node.next && set.has(node.next.val)) {
            node.next = node.next.next
        }
        node = node.next
    }
    return head
}

//leetcode submit region end(Prohibit modification and deletion)
