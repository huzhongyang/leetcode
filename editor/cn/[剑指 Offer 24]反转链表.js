"use strict";
//定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
//
//
//
// 示例:
//
// 输入: 1->2->3->4->5->NULL
//输出: 5->4->3->2->1->NULL
//
//
//
// 限制：
//
// 0 <= 节点个数 <= 5000
//
//
//
// 注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/
//
// Related Topics 递归 链表 👍 476 👎 0
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
    let currentNode = head;
    while (currentNode) {
        const nextNode = currentNode.next;
        currentNode.next = preNode;
        preNode = currentNode;
        currentNode = nextNode;
    }
    return preNode;
}
//leetcode submit region end(Prohibit modification and deletion)
//# sourceMappingURL=%5B%E5%89%91%E6%8C%87%20Offer%2024%5D%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.js.map