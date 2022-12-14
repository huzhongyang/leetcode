//输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。 
//
// 
//
// 示例 1： 
//
// 输入：nums = [2,7,11,15], target = 9
//输出：[2,7] 或者 [7,2]
// 
//
// 示例 2： 
//
// 输入：nums = [10,26,30,31,47,60], target = 40
//输出：[10,30] 或者 [30,10]
// 
//
// 
//
// 限制： 
//
// 
// 1 <= nums.length <= 10^5 
// 1 <= nums[i] <= 10^6 
// 
//
// Related Topics 数组 双指针 二分查找 👍 219 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function twoSum(nums: number[], target: number): number[] {
    const index = binarySearch(nums, target)
    nums = nums.slice(0, index + 1)
    for (const num of nums) {
        const resIndex = binarySearch(nums, target - num)
        if (nums[resIndex] === target - num) {
            return [num, nums[resIndex]]
        }
    }
}

function binarySearch(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1
    while (left < right) {
        const mid = left + Math.floor(right - left >> 1)
        if (nums[mid] !== target) {
            nums[mid] > target ? right = mid - 1 : left = mid + 1
        } else {
            return mid
        }
    }
    return right
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(twoSum([10, 26, 30, 31, 39, 41, 47, 60], 40))
