/**
 给你一个由正整数组成的整数数组 nums ，返回其中可被 3 整除的所有偶数的平均值。
 
 注意：n 个元素的平均值等于 n 个元素 求和 再除以 n ，结果 向下取整 到最接近的整数。
 
 
 
 示例 1：
 
 
 输入：nums = [1,3,6,10,12,15]
 输出：9
 解释：6 和 12 是可以被 3 整除的偶数。(6 + 12) / 2 = 9 。
 
 
 示例 2：
 
 
 输入：nums = [1,2,4,7,10]
 输出：0
 解释：不存在满足题目要求的整数，所以返回 0 。
 
 
 
 
 提示：
 
 
 1 <= nums.length <= 1000
 1 <= nums[i] <= 1000
 
 
 Related Topics 数组 数学 👍 6 👎 0
 
 */

//leetcode submit region begin(Prohibit modification and deletion)
function averageValue(nums: number[]): number {
    let sum   = 0,
        count = 0
    for (const num of nums) {
        if (num % 3 === 0 && num % 2 === 0) {
            sum += num
            count += 1
        }
    }
    return count === 0 ? 0 : Math.floor(sum / count)
}

//leetcode submit region end(Prohibit modification and deletion)
