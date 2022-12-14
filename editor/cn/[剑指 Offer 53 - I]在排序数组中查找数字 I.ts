//统计一个数字在排序数组中出现的次数。 
//
// 
//
// 示例 1: 
//
// 
//输入: nums = [5,7,7,8,8,10], target = 8
//输出: 2 
//
// 示例 2: 
//
// 
//输入: nums = [5,7,7,8,8,10], target = 6
//输出: 0 
//
// 
//
// 提示： 
//
// 
// 0 <= nums.length <= 10⁵ 
// -10⁹ <= nums[i] <= 10⁹ 
// nums 是一个非递减数组 
// -10⁹ <= target <= 10⁹ 
// 
//
// 
//
// 注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode-cn.com/problems/find-first-and-last-
//position-of-element-in-sorted-array/ 
//
// Related Topics 数组 二分查找 👍 382 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function search(nums: number[], target: number): number {
    if (nums[0] > target || nums[-1] < target) return 0

    let left = 0,
        right = nums.length - 1

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] !== target) {
            nums[mid] > target ? right = mid - 1 : left = mid + 1
        } else {
            left = mid
            break
        }
    }
    let res = 0
    right = left + 1
    while (nums[left] === target || nums[right] === target) {
        if (nums[left] === target) {
            left -= 1
            res += 1
        }
        if (nums[right] === target) {
            right += 1
            res += 1
        }
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(search([1, 2, 2, 3, 3, 4, 4, 5, 5], 4))
console.log(search([5, 7, 7, 8, 8, 10], 8))
