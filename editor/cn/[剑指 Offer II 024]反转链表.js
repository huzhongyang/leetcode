"use strict";
//给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
//
//
//
//
//
//
//
// 示例 1：
//
//
//输入：head = [1,2,3,4,5]
//输出：[5,4,3,2,1]
//
//
// 示例 2：
//
//
//输入：head = [1,2]
//输出：[2,1]
//
//
// 示例 3：
//
//
//输入：head = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
//
//
//
//
// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
//
//
//
//
// 注意：本题与主站 206 题相同： https://leetcode-cn.com/problems/reverse-linked-list/
//
// Related Topics 递归 链表 👍 84 👎 0
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
function reverseList(head) {
    let preNode = null;
    let curretnNode = head;
    while (curretnNode) {
        const nextNode = curretnNode.next;
        curretnNode.next = preNode;
        preNode = curretnNode;
        curretnNode = nextNode;
    }
    return preNode;
}
//leetcode submit region end(Prohibit modification and deletion)
//# sourceMappingURL=%5B%E5%89%91%E6%8C%87%20Offer%20II%20024%5D%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.js.map