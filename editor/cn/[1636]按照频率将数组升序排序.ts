//给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。 
//
// 请你返回排序后的数组。 
//
// 
//
// 示例 1： 
//
// 输入：nums = [1,1,2,2,2,3]
//输出：[3,1,1,2,2,2]
//解释：'3' 频率为 1，'1' 频率为 2，'2' 频率为 3 。
// 
//
// 示例 2： 
//
// 输入：nums = [2,3,1,3,2]
//输出：[1,3,3,2,2]
//解释：'2' 和 '3' 频率都为 2 ，所以它们之间按照数值本身降序排序。
// 
//
// 示例 3： 
//
// 输入：nums = [-1,1,-6,4,5,-6,1,4,1]
//输出：[5,-1,4,4,-6,-6,1,1,1] 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 100 
// -100 <= nums[i] <= 100 
// 
//
// Related Topics 数组 哈希表 排序 👍 96 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function frequencySort(nums: number[]): number[] {
    const map = new Map()
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    const arr = Array.from(map).sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    const res = []
    for (const arrElement of arr) {
        res.push(...Array(arrElement[1]).fill(arrElement[0]))
    }
    return res
}

//leetcode submit region end(Prohibit modification and deletion)

console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]))
