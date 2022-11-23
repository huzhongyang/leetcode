//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。 
//
// 
//
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。 
//
// 
//
// 示例 1: 
//
// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
//输出: 2 
//
// 
//
// 限制： 
//
// 1 <= 数组长度 <= 50000 
//
// 
//
// 注意：本题与主站 169 题相同：https://leetcode-cn.com/problems/majority-element/ 
//
// 
//
// Related Topics 数组 哈希表 分治 计数 排序 👍 330 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function majorityElement(nums: number[]): number {
    const hash = new Map()
    for (const num of nums) {
        hash.has(num)
        ? hash.set(num, hash.get(num) + 1)
        : hash.set(num, 1)
    }
    return Array.from(hash).sort((a, b) => a[1] - b[1]).at(-1)[0]
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2, 4, 4, 4, 4, 4, 4, 4]))
