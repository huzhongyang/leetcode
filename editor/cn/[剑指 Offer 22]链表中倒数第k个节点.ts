//输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。 
//
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。 
//
// 
//
// 示例： 
//
// 
//给定一个链表: 1->2->3->4->5, 和 k = 2.
//
//返回链表 4->5. 
//
// Related Topics 链表 双指针 👍 406 👎 0


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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    // if (head === null) return null
    // const hash = new Map()
    // let flag = 1
    // let curNode = head
    // while (curNode) {
    //     hash.set(flag, curNode)
    //     flag += 1
    //     curNode.next === null ? curNode = null : curNode = curNode.next
    // }
    // if (!hash.has(k)) return null
    // return hash.get(flag - k)
    
    // 快慢指针
    let fast = head, slow = head
    while (fast && k > 0) {
        [fast, k] = [fast.next, k - 1]
    }
    while (fast) {
        [fast, slow] = [fast.next, slow.next]
    }
    return slow
}

//leetcode submit region end(Prohibit modification and deletion)
