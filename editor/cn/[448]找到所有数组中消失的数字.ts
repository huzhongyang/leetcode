/**
 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，
 并以数组的形式返回结果。
 
 
 
 示例 1：
 
 
 输入：nums = [4,3,2,7,8,2,3,1]
 输出：[5,6]
 
 
 示例 2：
 
 
 输入：nums = [1,1]
 输出：[2]
 
 
 
 
 提示：
 
 
 n == nums.length
 1 <= n <= 10⁵
 1 <= nums[i] <= n
 
 
 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
 
 Related Topics 数组 哈希表 👍 1192 👎 0
 
 */
import { indexOf } from 'https://deno.land/std@0.92.0/bytes/mod.ts'

//leetcode submit region begin(Prohibit modification and deletion)
function findDisappearedNumbers(nums: number[]): number[] {
    const arr = Array.from(Array(nums.length).keys(), (v) => v + 1)
    const source = Array.from(new Set(nums.sort()))
    const res = []
    for (const num of arr) {
        if (source.indexOf(num) === -1) res.push(num)
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))
