//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。 
//
// 
//
// 示例： 
//
// 
//输入：nums = [1,2,3,4]
//输出：[1,3,2,4] 
//注：[3,1,2,4] 也是正确的答案之一。 
//
// 
//
// 提示： 
//
// 
// 0 <= nums.length <= 50000 
// 0 <= nums[i] <= 10000 
// 
//
// Related Topics 数组 双指针 排序 👍 267 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function exchange(nums: number[]): number[] {
    // if (nums.length < 2) return nums
    // for (const index in nums) {
    //     if (nums[index] % 2 !== 0) {
    //         nums.unshift(nums.splice(Number(index), 1)[0])
    //     }
    // }
    // return nums
    
    if (nums.length < 2) return nums
    let left = 0, right = nums.length - 1
    while (left < right) {
        while (left < right && nums[left] % 2 !== 0) left++
        while (left < right && nums[right] % 2 === 0) right--
        if (left < right) {
            const temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
    return nums
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(exchange([1, 2, 3, 4, 5, 5, 5, 5, 2, 2, 2]))
