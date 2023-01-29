/**
 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 k ，请你返回满足 0 <= i < j < n ，nums[i] == nums[j]
 且 (i * j) 能被 k 整除的数对 (i, j) 的 数目 。
 
 
 
 示例 1：
 
 输入：nums = [3,1,2,2,2,1,3], k = 2
 输出：4
 解释：
 总共有 4 对数符合所有要求：
 - nums[0] == nums[6] 且 0 * 6 == 0 ，能被 2 整除。
 - nums[2] == nums[3] 且 2 * 3 == 6 ，能被 2 整除。
 - nums[2] == nums[4] 且 2 * 4 == 8 ，能被 2 整除。
 - nums[3] == nums[4] 且 3 * 4 == 12 ，能被 2 整除。
 
 
 示例 2：
 
 输入：nums = [1,2,3,4], k = 1
 输出：0
 解释：由于数组中没有重复数值，所以没有数对 (i,j) 符合所有要求。
 
 
 
 
 提示：
 
 
 1 <= nums.length <= 100
 1 <= nums[i], k <= 100
 
 
 Related Topics 数组 👍 10 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
function countPairs(nums: number[], k: number): number {
    const hash = new Map<number, number[]>()
    for (const index in nums) {
        const i = Number(index)
        if (hash.has(nums[i])) {
            hash.set(nums[i], [...hash.get(nums[i]), i])
        } else {
            hash.set(nums[i], [i])
        }
    }
    let res = 0
    for (const items of hash.values()) {
        res += divisibleByK(items, k)
    }
    return res
}

function divisibleByK(items: number[], k: number): number {
    let count = 0
    const len = items.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((items[j] * items[i]) % k === 0) {
                count += 1
            }
        }
    }
    return count
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2))
console.log(countPairs([1, 2, 3, 4], 1))
