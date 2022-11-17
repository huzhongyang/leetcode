//输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。 
//
// 示例1： 
//
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4 
//
// 限制： 
//
// 0 <= 链表长度 <= 1000 
//
// 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/ 
//
// Related Topics 递归 链表 👍 294 👎 0


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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const res = new ListNode(-1)
    let preNode = res
    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            preNode.next = l2
            l2 = l2.next
        } else {
            preNode.next = l1
            l1 = l1.next
        }
        preNode = preNode.next
    }
    preNode.next = l1 === null ? l2 : l1
    return res.next
}

//leetcode submit region end(Prohibit modification and deletion)
