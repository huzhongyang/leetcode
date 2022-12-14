//一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出
//这个数字。 
//
// 
//
// 示例 1: 
//
// 输入: [0,1,3]
//输出: 2
// 
//
// 示例 2: 
//
// 输入: [0,1,2,3,4,5,6,7,9]
//输出: 8 
//
// 
//
// 限制： 
//
// 1 <= 数组长度 <= 10000 
//
// Related Topics 位运算 数组 哈希表 数学 二分查找 👍 327 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function missingNumber(nums: number[]): number {
    let pre = -1
    for (const num of nums) {
        if ((num - pre) !== 1) {
            return pre + 1
        }
        pre = num
    }
    return nums.at(-1) + 1
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(missingNumber([0]))
console.log(missingNumber([1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([0, 1, 3]))
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 8]))
